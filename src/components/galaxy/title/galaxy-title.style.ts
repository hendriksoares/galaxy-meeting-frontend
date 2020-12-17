import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  font: 48px/57px Helvetica Neue;
  text-align: center;
  font-weight: 400;
  letter-spacing: 14.4px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  ::after {
    content: '';
    z-index: 25;
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: -5px;
    left: 0;
    background: transparent url('/element-line.svg') 50% 50% no-repeat
      padding-box;
  }
`;

export default StyledWrapper;
