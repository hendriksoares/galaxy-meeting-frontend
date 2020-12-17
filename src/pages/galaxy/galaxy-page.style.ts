import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: radial-gradient(
    circle,
    rgba(144, 8, 91, 1) 0%,
    rgba(94, 36, 105, 1) 26%,
    rgba(21, 34, 71, 1) 58%,
    rgba(24, 22, 57, 1) 100%
  );
  ::after {
    z-index: 1;
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: transparent url('/img_bg.svg') 50% 50% no-repeat padding-box;
  }
`;

export default StyledWrapper;
