import { LoginCard, LoginLogo } from '@components/login';
import StyledWrapper from './login-page.style';

export const LoginPage = () => {
    return (
        <StyledWrapper>
            <LoginCard></LoginCard>
            <LoginLogo>
                <img src="/logo_invillia.png"/>
            </LoginLogo>
        </StyledWrapper>
    );
}
