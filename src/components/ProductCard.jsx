import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/**
 * Premium product card with hover lift effect.
 * Klug Avalon style: image on top, clean title, short description.
 */
export default function ProductCard({ product, index = 0 }) {
  const slug = product.slug || product.id
  const url = `/products/${slug}`

  return (
    <Link to={url} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group h-full block"
      >
        <div className="h-full bg-white rounded-xl border border-hejaaz-surface overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div className="aspect-[4/3] bg-hejaaz-surface overflow-hidden">
            <img
              src={product.imagePlaceholder || '/images/products/placeholder.svg'}
              alt=""
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/images/products/placeholder.svg'
              }}
            />
          </div>
          <div className="p-6">
            <span className="text-xs font-medium text-hejaaz-accent uppercase tracking-wider">
              {product.category}
            </span>
            <h3 className="mt-2 text-lg font-bold text-hejaaz-dark group-hover:text-hejaaz-accent transition-colors duration-200">
              {product.name}
            </h3>
            {product.tagline && (
              <p className="mt-2 text-sm text-hejaaz-gray-light line-clamp-2 leading-relaxed">
                {product.tagline}
              </p>
            )}
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-hejaaz-accent group-hover:gap-3 transition-all duration-200">
              Explore <ArrowRight size={16} aria-hidden />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
