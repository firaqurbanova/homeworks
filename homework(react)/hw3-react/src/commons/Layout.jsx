import React from 'react';
import styled from 'styled-components';

import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <Content>
                {children}
            </Content>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Content = styled.main`
    flex-grow: 1;
    max-width: 1200px;
    margin: 0 auto;
`


