import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ProductCard({ product, index = 0 }) {
  const slug = product.slug || product.id
  const url = `/products/${slug}`

  return (
    <Link to={url} className="block h-full group">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.06 }}
        className="h-full"
      >
        <div className="h-full bg-hejaaz-white rounded-xl border border-hejaaz-border overflow-hidden shadow-card group-hover:shadow-card-hover group-hover:-translate-y-0.5 transition-all duration-200">
          {/* Image */}
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

          {/* Content */}
          <div className="p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-hejaaz-secondary">{product.category}</span>
            <h3 className="mt-2 text-base font-bold text-hejaaz-primary group-hover:text-hejaaz-secondary transition-colors duration-150 leading-snug">
              {product.name}
            </h3>
            {product.tagline && (
              <p className="mt-2 text-sm text-hejaaz-text-light line-clamp-2 leading-relaxed">
                {product.tagline}
              </p>
            )}
            <div className="mt-4 pt-4 border-t border-hejaaz-border">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-hejaaz-secondary group-hover:gap-2.5 transition-all duration-150">
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
