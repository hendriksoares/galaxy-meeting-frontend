import StyledWrapper from './button.style';

interface Props {
    children: any,
    type: any;
}

export const Button = ({children, type}: Props) => {
    return(
    <StyledWrapper type={type} >{children}</StyledWrapper>
    );
}