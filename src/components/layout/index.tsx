import React from "react"
import { Layout } from 'antd';
import Menu from '../menu/index'
import Helmet from "react-helmet";
import Footer from "../footer";

const { Content } = Layout;

type PropsWithChildren = {
  backgroundColor?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PropsWithChildren> = ({ children, backgroundColor = "white" }: PropsWithChildren) => {

  var content = <Content >{children}</Content>
  if (backgroundColor) content = <Content style={{ backgroundColor: backgroundColor }}>{children}</Content>
  return (
    <Layout style={{ minHeight: '100vh', background: 'white' }}>
      <Helmet>
        <link rel="preload" href='https://fonts.googleapis.com/css?family=Rubik:regular,bold,italic&subset=latin,latin-ext'></link>
      </Helmet>
      <Menu />
      {content}
      <Footer />
    </Layout>
  )
}

export default PageLayout