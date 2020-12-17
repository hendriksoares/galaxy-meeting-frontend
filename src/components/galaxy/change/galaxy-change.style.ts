import styled from "styled-components";

interface Props {
    order: number;
}

const StyledWrapper = styled.div<Props>`
        display: flex;
        justify-content: left;

        .icon {
            order: 1;
            margin: 0 16px;
            cursor: pointer;
            :hover {
                opacity: 0.3;
            }
        }
        .destiny {
            order: ${props => 0 || props.order};
        }
        .title {
            font: 14px/17px Helvetica Neue;
            font-weight: 600;
            color: #ffffff;
        }
        .subtitle {
            font: 16px/19px Helvetica Neue;
            font-weight: 500;
            letter-spacing: 2.4px;
            color: #00EBFF;
            text-transform: uppercase;
            opacity: 0.7;
        }

`;

export default StyledWrapper;