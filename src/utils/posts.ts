// markdownファイルから記事情報（タイトル、日付、本文）を抽出する関数
export interface Post {
    title: string;
    date: string;
    slug: string;
    content: string;
}

// 全記事を取得してPost配列を返す（記事一覧ページで使う）
export async function getPosts(): Promise<Post[]> {
    // import: 'default' をつけないと文字列ではなく、オブジェクトそのものを返してしまう
    const modules = import.meta.glob("/posts/*.md", {
        query: "?raw",
        import: "default",
    }) as Record<string, () => Promise<string>>;

    const posts: Post[] = []; // 変数postsの型は Post[]で、初期値はから配列[]だよ

    for (const [path, loader] of Object.entries(modules)) {
        // modulesオブジェクトの中身をキーと値に分けて格納する
        const content = await loader();
        const slug = path.split("/").pop()?.replace(".md", "") || "";
        const post = parsePost(content, slug);
        posts.push(post);
    }

    // 降順表示（最新記事が一番上に表示される）
    // compareFn(a, b) が正の数を返せばaはbより後ろ→「b, a」の並び つまり降順
    // compareFn(a, b) が負のの数を返せばaはbより前→「a, b」の並び　つまり昇順
    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

// 特定の１記事をslugで指定して取得（記事詳細ページで使う）
export async function getPost(slug: string): Promise<Post | null> {
    // 一つ分の記事なので、Post[]ではなく、Post
    const modules = import.meta.glob("/posts/*.md", {
        query: "?raw",
        import: "default",
    }) as Record<string, () => Promise<string>>;

    const path = `/posts/${slug}.md`;
    const loader = modules[path];

    if (!loader) return null;

    const content = await loader();
    return parsePost(content, slug);
}

function parsePost(content: string, slug: string): Post {
    const lines = content.split("\n");

    let title = "";
    let date = "";
    let bodyStart = 0;

    for (let i = 0; i < lines.length; i++) {
        if (!title && lines[i].startsWith("#")) {
            title = lines[i].replace("#", "").trim();
        } else if (!date && /^\d{4}-\d{2}-\d{2}/.test(lines[i])) {
            date = lines[i].trim();
            bodyStart = i + 1;
            break;
        }
    }

    const body = lines.slice(bodyStart).join("\n").trim();

    return {
        title: title || "Untitled",
        date: date || "2026-01-01",
        slug,
        content: body,
    };
}
