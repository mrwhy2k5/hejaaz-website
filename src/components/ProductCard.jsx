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
    <Link to={url} className="block h-full group">
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
        className="h-full"
      >
        <div className="h-full bg-hejaaz-white rounded-2xl border border-hejaaz-border overflow-hidden shadow-card group-hover:shadow-card-hover group-hover:-translate-y-1 transition-all duration-300">
          {/* Image */}
          <div className="aspect-[4/3] bg-hejaaz-surface overflow-hidden">
            <img
              src={product.imagePlaceholder || '/images/products/placeholder.svg'}
              alt=""
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = '/images/products/placeholder.svg'
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="label">{product.category}</span>
            <h3 className="mt-3 text-lg font-bold text-hejaaz-dark group-hover:text-hejaaz-accent transition-colors duration-200 leading-snug">
              {product.name}
            </h3>
            {product.tagline && (
              <p className="mt-3 text-sm text-hejaaz-gray-light line-clamp-2 leading-relaxed">
                {product.tagline}
              </p>
            )}
            <div className="mt-5 pt-5 border-t border-hejaaz-border">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-hejaaz-accent group-hover:gap-3 transition-all duration-200">
                View details
                <ArrowRight size={14} aria-hidden />
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
