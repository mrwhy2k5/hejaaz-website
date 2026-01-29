import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const systemLabels = [
  {
    id: 'main-hook',
    label: 'Main Hook',
    description: 'Primary lifting hook with load cell integration',
    position: { desktop: { top: '15%', left: '35%' }, mobile: 1 },
    color: 'bg-hejaaz-accent',
  },
  {
    id: 'aux-hook',
    label: 'Auxiliary Hook',
    description: 'Secondary hook for lighter loads',
    position: { desktop: { top: '25%', left: '55%' }, mobile: 2 },
    color: 'bg-hejaaz-accent',
  },
  {
    id: 'load-pin',
    label: 'Load Pin / Tension Sensor',
    description: 'Precision sensor for accurate weight measurement',
    position: { desktop: { top: '40%', left: '30%' }, mobile: 3 },
    color: 'bg-hejaaz-accent',
  },
  {
    id: 'display',
    label: '4" Display Unit',
    description: 'Real-time load monitoring with LCD screen',
    position: { desktop: { top: '60%', left: '65%' }, mobile: 4 },
    color: 'bg-hejaaz-accent',
  },
  {
    id: 'atp-modbus',
    label: 'ATP / Modbus Interface',
    description: 'Communication module for PLC integration',
    position: { desktop: { top: '75%', left: '40%' }, mobile: 5 },
    color: 'bg-hejaaz-accent',
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
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 pt-16 border-t border-hejaaz-surface"
      >
        <h2 className="heading-md mb-3">
          EOT & Gantry Crane Safe Load Indicator – System Layout
        </h2>
        <p className="text-hejaaz-gray-light mb-8 max-w-2xl">
          Actual system layout showing sensor, hooks, display, and communication modules.
        </p>

        {/* Main Card Container */}
        <div className="rounded-2xl bg-[#f8fafc] border border-hejaaz-surface shadow-card overflow-hidden">
          {/* Desktop Layout: Image with side labels */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-0">
            {/* Left Labels */}
            <div className="col-span-2 p-6 flex flex-col justify-center gap-4">
              {systemLabels.slice(0, 3).map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveLabel(item.id)}
                  onMouseLeave={() => setActiveLabel(null)}
                  className={`text-left p-3 rounded-lg transition-all duration-200 ${
                    activeLabel === item.id 
                      ? 'bg-hejaaz-accent/10 border-hejaaz-accent' 
                      : 'bg-white hover:bg-hejaaz-accent/5'
                  } border border-hejaaz-surface`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-sm font-semibold text-hejaaz-dark">{item.label}</span>
                  </div>
                  <p className="text-xs text-hejaaz-gray-light leading-relaxed">{item.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Center Image */}
            <div className="col-span-8 relative bg-white p-6">
              <div 
                className="relative aspect-[16/10] rounded-xl overflow-hidden bg-hejaaz-surface cursor-zoom-in group"
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
                <div className="absolute inset-0 bg-hejaaz-dark/0 group-hover:bg-hejaaz-dark/10 transition-colors duration-200 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 px-4 py-2 rounded-lg text-sm font-medium text-hejaaz-dark flex items-center gap-2">
                    <ZoomIn size={16} />
                    Click to zoom
                  </span>
                </div>

                {/* Marker Points on Image */}
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
                    className={`w-4 h-4 rounded-full border-2 border-white shadow-lg transition-transform duration-200 ${
                      activeLabel === item.id ? 'scale-150 ' + item.color : item.color
                    }`}
                    onMouseEnter={() => setActiveLabel(item.id)}
                    onMouseLeave={() => setActiveLabel(null)}
                  >
                    {/* Pulse animation */}
                    <span className={`absolute inset-0 rounded-full ${item.color} animate-ping opacity-30`} />
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {activeLabel === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute left-1/2 -translate-x-1/2 top-6 z-10 bg-hejaaz-dark text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg"
                        >
                          {item.label}
                          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-hejaaz-dark rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Labels */}
            <div className="col-span-2 p-6 flex flex-col justify-center gap-4">
              {systemLabels.slice(3).map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveLabel(item.id)}
                  onMouseLeave={() => setActiveLabel(null)}
                  className={`text-left p-3 rounded-lg transition-all duration-200 ${
                    activeLabel === item.id 
                      ? 'bg-hejaaz-accent/10 border-hejaaz-accent' 
                      : 'bg-white hover:bg-hejaaz-accent/5'
                  } border border-hejaaz-surface`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-sm font-semibold text-hejaaz-dark">{item.label}</span>
                  </div>
                  <p className="text-xs text-hejaaz-gray-light leading-relaxed">{item.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Layout: Image first, labels stacked below */}
          <div className="lg:hidden">
            {/* Image */}
            <div 
              className="relative aspect-[4/3] bg-white p-4 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-hejaaz-surface">
                <img
                  src={imageSrc}
                  alt="EOT & Gantry Crane Safe Load Indicator System Layout"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/images/products/placeholder.svg'
                  }}
                />
                <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1.5 rounded-lg text-xs font-medium text-hejaaz-dark flex items-center gap-1.5">
                  <ZoomIn size={14} />
                  Tap to zoom
                </div>
              </div>
            </div>

            {/* Stacked Labels */}
            <div className="p-4 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {systemLabels.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-white rounded-lg border border-hejaaz-surface"
                >
                  <span className={`shrink-0 w-3 h-3 mt-0.5 rounded-full ${item.color}`} />
                  <div>
                    <span className="text-sm font-semibold text-hejaaz-dark block">{item.label}</span>
                    <p className="text-xs text-hejaaz-gray-light leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-hejaaz-gray-light text-center italic">
          Actual system layout showing sensor, hooks, display, and communication modules.
        </p>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-hejaaz-dark/95 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
              
              <div className="rounded-xl overflow-hidden bg-white">
                <img
                  src={imageSrc}
                  alt="EOT & Gantry Crane Safe Load Indicator System Layout - Full View"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              <p className="mt-4 text-sm text-white/70 text-center">
                EOT & Gantry Crane Safe Load Indicator – System Layout
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
