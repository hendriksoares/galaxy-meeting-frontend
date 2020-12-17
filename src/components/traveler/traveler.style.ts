import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 30px;
  width: 35px;
  height: 35px;

  margin: 4px;
  img {
    border: 2px solid #fa00c0;
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .nick {
    font: 11px/13px Helvetica Neue;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    z-index: 30;
  }
`;

export default StyledWrapper;
