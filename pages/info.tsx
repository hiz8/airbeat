import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import color from '../const/color';
import { ArrowLeft as IconArrowLeft } from 'react-feather';

class Info extends React.Component {
  public static getInitialProps({ isServer }) {
    return { isServer };
  }

  public render() {
    return (
      <InfoWrapper>
        <Head>
          <title>Information - airbeat</title>
        </Head>
        <div>
          <Link href="/">
            <InfoButton>
              <IconArrowLeft />
            </InfoButton>
          </Link>
        </div>
        <Main>
          <Logo>
            <img src="/static/img/icons/logo.svg" alt="" />
          </Logo>
          <Title>airbeat</Title>
          <Description>Offline supported metronome application</Description>
        </Main>
        <Copyright>© 2019 plyr.</Copyright>
      </InfoWrapper>
    );
  }
}

export default Info;

const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #eee;
  min-height: 100vh;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
`;

const Main = styled.main`
  height: calc(100vh - 44px - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  margin: -15% auto 0;
`;

const Title = styled.h1`
  color: ${color.PRIMARY};
  text-align: center;
  font-size: 1.7rem;
  margin: 0;
  font-weight: 400;
`;

const Description = styled.h2`
  color: ${color.PRIMARY};
  text-align: center;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 400;
`;

const Copyright = styled.div`
  color: ${color.PRIMARY};
  font-size: 0.8rem;
  text-align: center;
`;

const InfoButton = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #333;
`;
