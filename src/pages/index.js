import * as React from "react"
import "../assets/css/index.css"  // Import the CSS file

const punycode = require('punycode/');
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
    <main className="page">
      <img className="hero" alt="hero" src="https://res.cloudinary.com/dj9sie6nl/image/upload/v1730658328/Anuya/Hero2.jpg" />

      <h1 className="heading">
        Congratulations
        <br />
        <span className="heading-accent">— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <p className="paragraph">
        Edit <code className="code">src/pages/index.js</code> to see this page
        update in real-time. 😎
      </p>
      <ul className="list">
        <li className="doc-link">
          <a
            className="link"
            href="https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter"
          >
            Documentation
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} className="list-item" style={{ color: link.color }}>
            <span>
              <a
                className="link"
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span className="badge" aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p className="description">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Art by Anuya</title>