import { Link, routes } from '@redwoodjs/router'

import './BlogLayout.css'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Site</Link>
        </h1>
        <nav>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.about()}>About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
