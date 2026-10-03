// JSON に書いた public/ 配下の相対パス(例: "images/works/foo.png")を配信URLに変換する。
// Vite の base 設定が変わってもパスが壊れないよう BASE_URL を前置する。
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
