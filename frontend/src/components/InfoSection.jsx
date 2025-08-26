export default function InfoSection({ titulo, parrafo }) {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2">{titulo}</h2>
      <p className="text-gray-700">{parrafo}</p>
    </div>
  );
}
