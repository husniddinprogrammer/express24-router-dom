import React from 'react'
import Sidebar from '../sidebar';
import Header from '../header';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Layout = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  background: #f8f9fa;
  min-height: 100vh;
`;

export default function MainSection() {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <Header />
        <Outlet />
      </Content>
    </Layout>
  )
}
