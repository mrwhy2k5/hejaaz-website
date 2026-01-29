import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const systemLabels = [
  {
    id: 'main-hook',
    label: 'Main Hook',
    description: 'Primary lifting hook with load cell integration',
    position: { desktop: { top: '15%', left: '35%' }, mobile: 1 },
  },
  {
    id: 'aux-hook',
    label: 'Auxiliary Hook',
    description: 'Secondary hook for lighter loads',
    position: { desktop: { top: '25%', left: '55%' }, mobile: 2 },
  },
  {
    id: 'load-pin',
    label: 'Load Pin / Tension Sensor',
    description: 'Precision sensor for accurate weight measurement',
    position: { desktop: { top: '40%', left: '30%' }, mobile: 3 },
  },
  {
    id: 'display',
    label: '4" Display Unit',
    description: 'Real-time load monitoring with LCD screen',
    position: { desktop: { top: '60%', left: '65%' }, mobile: 4 },
  },
  {
    id: 'atp-modbus',
    label: 'ATP / Modbus Interface',
    description: 'Communication module for PLC integration',
    position: { desktop: { top: '75%', left: '40%' }, mobile: 5 },
  },
]

export default function SystemLayoutDiagram({ productType = 'eot' }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeLabel, setActiveLabel] = useState(null)

  const imageSrc = productType === 'gantry' 
    ? '/images/products/gantry-crane.jpg' 
    : '/images/products/eot-crane.png'

  return (
    <>
      <div>
        <h2 className="heading-md mb-2">
          EOT & Gantry Crane Safe Load Indicator – System Layout
        </h2>
        <p className="text-hejaaz-text-light mb-6 max-w-2xl">
          Actual system layout showing sensor, hooks, display, and communication modules.
        </p>

        {/* Main Card Container */}
        <div className="rounded-xl bg-hejaaz-surface border border-hejaaz-border shadow-card overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-0">
            {/* Left Labels */}
            <div className="col-span-2 p-5 flex flex-col justify-center gap-3">
              {systemLabels.slice(0, 3).map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  onMouseEnter={() => setActiveLabel(item.id)}
                  onMouseLeave={() => setActiveLabel(null)}
                  className={`text-left p-3 rounded-lg transition-all duration-150 ${
                    activeLabel === item.id 
                      ? 'bg-hejaaz-secondary/10 border-hejaaz-secondary' 
                      : 'bg-white hover:bg-hejaaz-secondary/5'
                  } border border-hejaaz-border`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-hejaaz-secondary" />
                    <span className="text-sm font-semibold text-hejaaz-primary">{item.label}</span>
                  </div>
                  <p className="text-xs text-hejaaz-text-light leading-relaxed">{item.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Center Image */}
            <div className="col-span-8 relative bg-white p-5">
              <div 
                className="relative aspect-[16/10] rounded-lg overflow-hidden bg-hejaaz-surface cursor-zoom-in group"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  src={imageSrc}
                  alt="EOT & Gantry Crane Safe Load Indicator System Layout"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/images/products/placeholder.svg'
                  }}
                />
                
                {/* Zoom overlay */}
                <div className="absolute inset-0 bg-hejaaz-primary/0 group-hover:bg-hejaaz-primary/5 transition-colors duration-150 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-white/90 px-3 py-1.5 rounded-md text-sm font-medium text-hejaaz-primary flex items-center gap-2">
                    <ZoomIn size={16} />
                    Click to zoom
                  </span>
                </div>

                {/* Marker Points */}
                {systemLabels.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      position: 'absolute',
                      top: item.position.desktop.top,
                      left: item.position.desktop.left,
                    }}
                    className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-md transition-transform duration-150 bg-hejaaz-secondary ${
                      activeLabel === item.id ? 'scale-125' : ''
                    }`}
                    onMouseEnter={() => setActiveLabel(item.id)}
                    onMouseLeave={() => setActiveLabel(null)}
                  >
                    {activeLabel === item.id && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-5 z-10 bg-hejaaz-primary text-white px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shadow-lg">
                        {item.label}
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-hejaaz-primary rotate-45" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Labels */}
            <div className="col-span-2 p-5 flex flex-col justify-center gap-3">
              {systemLabels.slice(3).map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  onMouseEnter={() => setActiveLabel(item.id)}
                  onMouseLeave={() => setActiveLabel(null)}
                  className={`text-left p-3 rounded-lg transition-all duration-150 ${
                    activeLabel === item.id 
                      ? 'bg-hejaaz-secondary/10 border-hejaaz-secondary' 
                      : 'bg-white hover:bg-hejaaz-secondary/5'
                  } border border-hejaaz-border`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-hejaaz-secondary" />
                    <span className="text-sm font-semibold text-hejaaz-primary">{item.label}</span>
                  </div>
                  <p className="text-xs text-hejaaz-text-light leading-relaxed">{item.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div 
              className="relative aspect-[4/3] bg-white p-4 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-hejaaz-surface">
                <img
                  src={imageSrc}
                  alt="EOT & Gantry Crane Safe Load Indicator System Layout"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/images/products/placeholder.svg'
                  }}
                />
                <div className="absolute bottom-3 right-3 bg-white/90 px-2.5 py-1.5 rounded-md text-xs font-medium text-hejaaz-primary flex items-center gap-1.5">
                  <ZoomIn size={14} />
                  Tap to zoom
                </div>
              </div>
            </div>

            <div className="p-4 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {systemLabels.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-hejaaz-border"
                >
                  <span className="shrink-0 w-2.5 h-2.5 mt-0.5 rounded-full bg-hejaaz-secondary" />
                  <div>
                    <span className="text-sm font-semibold text-hejaaz-primary block">{item.label}</span>
                    <p className="text-xs text-hejaaz-text-light leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm text-hejaaz-text-light text-center italic">
          Actual system layout showing sensor, hooks, display, and communication modules.
        </p>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-hejaaz-primary/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <div className="rounded-lg overflow-hidden bg-white">
              <img
                src={imageSrc}
                alt="EOT & Gantry Crane Safe Load Indicator System Layout - Full View"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            <p className="mt-3 text-sm text-white/70 text-center">
              EOT & Gantry Crane Safe Load Indicator – System Layout
            </p>
          </div>
        </div>
      )}
    </>
  )
}
