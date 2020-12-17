import styled from "styled-components";

interface Props {
    posX: string;
    posY: string;
}
export const StyledWrapper = styled.div<Props>`
    cursor: pointer;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    z-index: 20;
    color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #888;
    padding: 30px;
    height: 200px;
    width: 200px;
    top: ${props => props.posY || '200px'};
    left: ${props => props.posX || '200px'};
    background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(20,2,36,0.7) 8%, rgba(91,10,163,0.7021009087228641) 91%, rgba(255,177,0,0.7) 100%);
    .title {
        position: absolute;
        width: 100%;
        bottom: -30px;
        left: 0;
        text-align: center;
        font: 20px/25px Helvetica Neue;
        font-weight: 500;
        text-transform: capitalize;
    }
`;

export default StyledWrapper;
