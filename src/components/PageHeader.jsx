/**
 * Page hero: large bold title + optional subtitle.
 * Klug Avalon style: minimal, engineering-focused.
 */
export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-hejaaz-dark text-white py-20 sm:py-24">
      <div className="container-content">
        <div className="max-w-narrow mx-auto text-center">
          <h1 className="heading-xl text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
