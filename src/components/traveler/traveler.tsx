import { Interface } from 'readline';
import StyledWrapper from './traveler.style';

interface Props {
    traveler: any;
}

export const Traveler = ({traveler}: Props) => {
    return(
        <StyledWrapper>
            <img src={traveler.avatar} />
        </StyledWrapper>
    );
}