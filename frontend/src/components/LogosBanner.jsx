export default function LogosBanner({ logos }) {
  return (
    <section id="aliados" className="py-8 bg-gray-50">
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <div className="flex gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex-shrink-0 py-2 px-4 bg-white shadow rounded">
              {logo.imageUrl ? (
                <img src={logo.imageUrl} alt={logo.name} className="h-12" />
              ) : (
                <span>{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
