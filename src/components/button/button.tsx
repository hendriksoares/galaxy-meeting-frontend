import StyledWrapper from './button.style';

interface Props {
    children: any,
}

export const Button = ({children}: Props) => {
    return(
    <StyledWrapper>{children}</StyledWrapper>
    );
}