import styled from 'styled-components';

interface Props {
  bgColor?: string;
  color?: string;
}

const StyledWrapper = styled.button<Props>`
  font: 17px/20px Helvetica Neue;
  font-weight: 500;
  text-align: center;
  width: 100%;
  padding: 16px;
  color: ${(props) => props.bgColor || '#000000'};
  background-color: ${(props) => props.bgColor || '#ffffff'};
  border-radius: 8px;
  cursor: pointer;
`;

export default StyledWrapper;
