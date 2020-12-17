import { GalaxyChange } from "../change/galaxy-change";
import StyledWrapper from "./galaxy-title.style";

interface Props {
    children: any;
}

export const GalaxyTitle = ({children} : Props) => {
    return (
        <StyledWrapper>    
            {children}
        </StyledWrapper>
    );
}