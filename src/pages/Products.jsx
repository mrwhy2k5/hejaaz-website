import Layout from '../components/Layout'
import SeoHead from '../components/SeoHead'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

export default function Products() {
  return (
    <Layout>
      <SeoHead title="Products" description="Safe Load Indicators for tower, EOT, gantry, crawler, telescopic, pick & carry, forklift, tipper truck." path="/products" />
      <PageHeader
        title="Products"
        subtitle="Safe Load Indicators for tower, EOT, gantry, crawler, telescopic, pick & carry cranes, forklifts, and tipper trucks."
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            title="Safe Load Indicators"
            subtitle="Each product links to a detail page with overview, components, working principle, features, specs, applications, and compliance."
            animate={false}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
