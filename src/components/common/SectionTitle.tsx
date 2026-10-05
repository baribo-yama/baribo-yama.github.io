type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className = "mb-10" }: Props) {
  return (
    <h2
      //   className={`inline-block bg-emphasis rounded-md text-white text-2xl font-semibold px-4 py-2 ${className}`}
      className={`text-emphasis text-2xl font-bold py-2 border-b-2 ${className}`}
    >
      {children}
    </h2>
  );
}
