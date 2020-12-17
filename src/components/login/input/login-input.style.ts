import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  label {
    width: 100%;
    font: 17px/20px Helvetica Neue;
    font-weight: 400;
    margin-bottom: 8px;
  }
  input {
    font: 20px/24px Helvetica Neue;
    font-weight: 400;
    padding: 16px 22px;
    background: #5e2469 0% 0% no-repeat padding-box;
    border: 0;
    border-radius: 8px;
    opacity: 1;
    width: 100%;
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    color: #ffffff;
    margin-bottom: 24px;
  }
`;

export default StyledWrapper;
