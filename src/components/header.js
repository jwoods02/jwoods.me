// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { loadCSS } from "fg-loadcss"

function Header({ siteTitle }) {
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    )
  }, [])

  return (
    <div className="bg-teal-500 p-6">
      <nav className="container mx-auto flex items-center justify-between flex-wrap ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" className="font-semibold text-2xl tracking-tight">
            {siteTitle}
          </a>
        </div>
        <div className="flex items-center flex-shrink-0 items-center w-auto">
          <div className="text-lg self-end">
            <a
              href="#responsive-header"
              className="inline-block mt-0 text-teal-200 hover:text-white mr-6"
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              className="inline-block mt-0 text-teal-200 hover:text-white mr-6"
            >
              CV
            </a>
            <a
              href="#responsive-header"
              className="inline-block mt-0 text-teal-200 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
