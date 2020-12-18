import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  bottom: -160px;
  width: 250px;
  left: 30%;
  z-index: 100;
  background: #5e246940 0% 0% no-repeat padding-box;
  border: 1px solid #ffffff34;
  border-radius: 8px;
  opacity: 1;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  font: 16px/19px Helvetica Neue;
  font-weight: 500;
  a {
    width: 100%;
    margin-bottom: 8px;
    cursor: pointer;
    :hover {
      color: #888;
    }
  }
`;

export default StyledWrapper;
