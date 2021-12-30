/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import Footer from "./footer"

// Styles
import "../styles/reset.css"
import "../styles/accessibility.css"
import "../fonts/fonts.css"

// ----- Styled Components -----
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  margin: 0;
`
const SidebarWrap = styled.div`
  background: #d7e8d4;
  flex: 1;
`
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`
const HeaderWrap = styled.div`
  background: yellowgreen;
  height: 20vh;
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
`
const FooterWrap = styled.div`
  background: yellowgreen;
  height: 20vh;
`
const ArticleWrap = styled.article`
  flex: 4;
  min-height: 60vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <a className="skip-link screen-reader-text" href="#primary">
        Skip to the content
      </a>
      <Container>
        <SidebarWrap>Sidebar Area</SidebarWrap>
        <MainWrap>
          <HeaderWrap>Header Area</HeaderWrap>
          <ContentWrap>
            <ArticleWrap>{children}</ArticleWrap>
          </ContentWrap>
          <FooterWrap>Footer Area</FooterWrap>
        </MainWrap>
      </Container>
    </>
  )
}

export default Layout
