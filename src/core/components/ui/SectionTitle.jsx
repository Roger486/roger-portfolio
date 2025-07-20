export default function SectionTitle({ children }) {
  return (
    <h2
      className="
        text-3xl font-bold pt-40 relative drop-shadow-md
        after:flex after:bg-blue-400 after:mt-2 after:h-1 after:max-w-md after:w-2/4 after:mb-15
      "
    >
      {children}
    </h2>
  );
}
