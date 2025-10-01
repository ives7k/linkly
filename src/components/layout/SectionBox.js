export default function SectionBox({children}) {
  return (
    <div className="bg-white m-8 p-6 rounded-2xl shadow-soft border border-gray-100">
      {children}
    </div>
  );
}