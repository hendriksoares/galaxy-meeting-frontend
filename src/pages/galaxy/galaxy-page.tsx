import { GalaxyNavbar } from '@components/galaxy';
import StyledWrapper from './galaxy-page.style';
import { InvilliaLogo } from '@components/invillia';
import { Planet } from '@components/planet/planet';
import { GalaxyDto } from 'dtos/galaxy.dto';

interface Props {
    next: GalaxyDto;
    current: GalaxyDto;
    previous: GalaxyDto;
}

const GalaxyPage = ({next, current, previous}: Props ) => {

    const posX = ['200px', '500px', '400px','700px','900px','1200px'];
    const posY = ['200px', '200px', '500px','500px','300px','200px'];

    const planets = [];
    if (current) {
        for (const [i, planet] of current.planets.entries()) {
            planets.push(<Planet planet={planet} posX={posX[i]} posY={posY[i]} key={`planet-${planet.name}`} />);
        }
    }
    return (
            <StyledWrapper>
                <GalaxyNavbar current={current} next={next} previous={previous}/>
                {planets}
                <InvilliaLogo>
                    <img src="/logo_invillia.png"/>
                </InvilliaLogo>
            </StyledWrapper>      
    );
}

export default GalaxyPage;