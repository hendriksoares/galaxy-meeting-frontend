import StyledWrapper from './planet.style';
import { Traveler } from '@components/traveler';
import { PlanetInfo } from './info/planet-info';
import { PlanetDto } from 'dtos/planet.dto';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

interface Props {
  planet: PlanetDto;
  posX: string;
  posY: string;
}

export const Planet = ({ planet, posX, posY }: Props) => {
  const planets = [];
  for (const [i, traveler] of planet.travelers.entries()) {
    planets.push(
      <Traveler
        traveler={traveler}
        key={`travaler-${traveler.nickname}-${i}`}
      />,
    );
  }

  const selected = useSelector((state: RootState) => state.selected);
  const dispatch = useDispatch();

  const toggleInfo = () => {
    if (info == true) {
      dispatch({ type: 'SET_PLANET', selected: null });
    } else {
      dispatch({ type: 'SET_PLANET', selected: planet.name });
    }
  };

  let info = false;
  if (planet.name === selected) {
    info = true;
  }
  return (
    <div onClick={toggleInfo}>
      <StyledWrapper posX={posX} posY={posY}>
        {planets}
        <div className="title"> {planet.name} </div>
        {info ? (
          <PlanetInfo planetId={planet.id} link={planet.conferenceLink} />
        ) : (
          ''
        )}
      </StyledWrapper>
    </div>
  );
};
