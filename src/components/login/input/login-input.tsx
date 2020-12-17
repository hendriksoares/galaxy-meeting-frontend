import StyledWrapper from './login-input.style';

interface Props {
  label: string;
  type: string;
  register: any;
  errors: any;
  name: string;
}

export const LoginInput = ({ name, label, type, register, errors }: Props) => {
  return (
    <StyledWrapper>
      <label htmlFor={label}> {label} </label>
      <input name={name} type={type} ref={register({ required: true })} />
      {errors[name] && <span>This field is required</span>}
    </StyledWrapper>
  );
};
