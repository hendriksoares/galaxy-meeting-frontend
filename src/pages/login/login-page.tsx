import { LoginCard } from '@components/login';
import { InvilliaLogo } from '@components/invillia';
import StyledWrapper from './login-page.style';
import Head from 'next/head';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Galaxy Meeting - LOGIN </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledWrapper>
        <LoginCard></LoginCard>
        <InvilliaLogo>
          <img src="/logo_invillia.png" />
        </InvilliaLogo>
      </StyledWrapper>
    </>
  );
};

export default LoginPage;
