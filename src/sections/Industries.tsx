const INDUSTRIES = [
  'Roofing and contractors',
  'Salons and barbershops',
  'Retail and boutiques',
  'Auto repair',
  'Cleaning services',
  'Clinics and wellness',
  'Restaurants and cafes',
  'Tutoring and education',
  'Accounting and professional services',
]

export default function Industries() {
  return (
    <section aria-labelledby="industries-heading" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-10 md:flex md:items-baseline md:gap-10">
        <h2 id="industries-heading" className="shrink-0 text-lg font-semibold text-ink">
          Built for businesses like yours
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-muted md:mt-0">
          {INDUSTRIES.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
