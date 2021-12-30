import React from "react"
import styled from "styled-components"

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
// ----- End Styled Components -----

export default function Home() {
  return (
    <Container>
      <SidebarWrap>Sidebar Area</SidebarWrap>
      <MainWrap>
        <HeaderWrap>Header Area</HeaderWrap>
        <ContentWrap>
          <ArticleWrap>Hello world, from Bill!</ArticleWrap>
        </ContentWrap>
        <FooterWrap>Footer Area</FooterWrap>
      </MainWrap>
    </Container>
  )
}
