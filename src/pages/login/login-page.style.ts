import styled from 'styled-components';

const StyledWrapper = styled.div`
    z-index: 10;
    position:relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    opacity: 1;
    background: radial-gradient(circle, rgba(144,8,91,1) 0%, rgba(94,36,105,1) 26%, rgba(21,34,71,1) 58%, rgba(24,22,57,1) 100%);
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