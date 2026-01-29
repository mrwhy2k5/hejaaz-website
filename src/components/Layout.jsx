import Header from './Header'
import Footer from './Footer'

/**
 * Main layout wrapper: sticky header + main content + footer.
 * Use for all page-level routes.
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-[4.25rem]">{children}</main>
      <Footer />
    </div>
  )
}
