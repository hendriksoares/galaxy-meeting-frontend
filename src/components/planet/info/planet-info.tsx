import StyledWrapper from './planet-info.style';
import Link from 'next/link'

interface Props {
    planetId: string;
    link: string;
}

export const PlanetInfo = ( {planetId, link} ) => {
    
    const travelTo = async () => {   
        const token = sessionStorage.getItem('@GM-TOKEN');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer '+ token );

        const res  = await fetch('http://localhost:3000/planet/meeting/join', { method: 'POST', body: JSON.stringify({planetId}), headers } )
        const galaxies = await res.json();
    }
    const ingressTo = () => {
        // TODO fisrt travel and after redirect to link
    }
    console.log(link);
    return(
        <StyledWrapper >
            <a onClick={travelTo} >Viajar para o Planeta </a>
            <Link href={link}>
                <a target='_blank'> Ingressar na Video Conferência </a>
            </Link>
        </StyledWrapper>
    )
}