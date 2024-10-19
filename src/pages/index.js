import * as React from "react"
import CheckHeader from "./header"
import './index.css'

const IndexPage = () => {
  return (
    <main className="body-container">
      <CheckHeader />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Chess Academy</title>