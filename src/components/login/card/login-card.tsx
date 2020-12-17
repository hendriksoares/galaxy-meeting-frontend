import StyledWrapper from './login-card.style';
import { LoginInput } from '@components/login';
import { Button } from '@components/button';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth.context';

interface LoginForm {
  email: string;
  password: string;
}

export const LoginCard = () => {
  const { register, handleSubmit, errors } = useForm<LoginForm>();
  const [isInvalid, setIsInvalid] = useState(false);
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const onSubmit = async ({ email, password }: LoginForm) => {
    try {
      await signIn(email, password);
      router.push('/galaxy/0');
    } catch (err) {
      setIsInvalid(true);
    }
  };
  return (
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
      <h1> Seja bem-vindo</h1>
      <LoginInput
        name="email"
        label="Email"
        type="text"
        register={register}
        errors={errors}
      />
      <LoginInput
        name="password"
        label="Senha"
        type="password"
        register={register}
        errors={errors}
      />
      <Button type="submit"> Entrar </Button>
      {isInvalid ? <div> email or password invalid </div> : ''}
    </StyledWrapper>
  );
};
