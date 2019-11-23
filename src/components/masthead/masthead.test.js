import React from "react"
import { render } from "@testing-library/react"

import MastHead from "./masthead"

describe(`MastHead`, () => {
  it(`renders correctly`, () => {
    const { getByText, getByAltText } = render(<MastHead />)

    const text = getByText(
      "Hi, I’m James Woods. I’m a software developer in London, UK who builds for the web and mobile"
    )

    expect(text).toBeInTheDocument()
  })
})
