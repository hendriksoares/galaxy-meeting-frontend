import StyledWrapper from './login-card.style';
import {LoginInput} from '@components/login';
import { Button } from '@components/button';

export const LoginCard = () => {
  return(
    <StyledWrapper>
      <h1> Seja bem-vindo</h1>
      <LoginInput label='Email' type='text'/>
      <LoginInput label='Senha' type='password'/>
      <Button> Entrar </Button>
    </StyledWrapper>
  );
}
