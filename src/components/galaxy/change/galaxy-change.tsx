
import React from "react";
import StyledWrapper from "./galaxy-change.style";
import Link from 'next/link'
import { GalaxyDto } from "dtos/galaxy.dto";

interface Props {
    direction: string;
    galaxy: GalaxyDto;
}

export const GalaxyChange = ({ direction, galaxy }: Props) => {

    const order = direction === 'left' ? 2 : 0;
    
    return (
        <StyledWrapper order={order} >
            <div className="icon">
            <a href={`/galaxy/${galaxy?.order}`}>
                <img src={`/ic-travel-${direction}.svg`}  />
            </a>
            </div>
            <div className="destiny">
                <div className="title"> Viajar para </div>
                <div className="subtitle" > {galaxy?.name} </div>
            </div>
        </StyledWrapper>
    );
}