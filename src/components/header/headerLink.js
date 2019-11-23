import React from "react"

export default function headerLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block mt-0 text-teal-200 hover:text-white mr-6"
    >
      {children}
    </a>
  )
}
