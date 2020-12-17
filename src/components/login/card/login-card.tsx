import StyledWrapper from './login-card.style';
import {LoginInput} from '@components/login';
import { Button } from '@components/button';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useRouter } from 'next/router'

interface LoginForm {
    email: string;
    password: string;
}

export const LoginCard = () => {
  const { register, handleSubmit, errors } = useForm<LoginForm>();
  const [isInvalid, setIsInvalid] = useState(false);
  const router = useRouter();

  const onSubmit = async ({email, password}: LoginForm)  => {
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers,
    }
    
    const res = await fetch(
      `${process.env.GALAXY_MEETING_API}/auth`, options
    );
   
    if (res.ok) {
      const data = await res.json();
      sessionStorage.setItem('@GM-TOKEN', data.token);
      router.push('/galaxy/0');
    } else {      
      setIsInvalid(true);
    }
    
  }
  return(
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
      <h1> Seja bem-vindo</h1>
      <LoginInput name='email' label='Email' type='text' register={register} errors={errors}/>
      <LoginInput name='password' label='Senha' type='password' register={register} errors={errors}/>
      <Button type="submit" > Entrar </Button>
      {isInvalid ? <div> email or password invalid </div> : ''}
    </StyledWrapper>
  );
}
