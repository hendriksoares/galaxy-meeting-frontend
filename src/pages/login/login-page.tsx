import { LoginCard } from '@components/login';
import { InvilliaLogo } from '@components/invillia';
import StyledWrapper from './login-page.style';

const LoginPage = () => {
    return (
        <StyledWrapper>
            <LoginCard></LoginCard>
            <InvilliaLogo>
                <img src="/logo_invillia.png"/>
            </InvilliaLogo>
        </StyledWrapper>
    );
}

export default LoginPage;