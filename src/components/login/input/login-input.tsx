import StyledWrapper from './login-input.style';

interface Props {
    label: string;
    type: string;
}

export const LoginInput = ({label, type}: Props) => {
  return(
    <StyledWrapper>
        <label htmlFor={label}> {label} </label>
        <input name={label} type={type}/>
    </StyledWrapper>
  );
}
