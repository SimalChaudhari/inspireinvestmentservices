import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default Layout
