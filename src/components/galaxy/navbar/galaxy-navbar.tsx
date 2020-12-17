import { GalaxyDto } from 'dtos/galaxy.dto';
import { GalaxyChange } from '../change/galaxy-change';
import { GalaxyTitle } from '../title/galaxy-title';
import StyledWrapper from './galaxy-navbar.style';

interface Props {
  current: GalaxyDto;
  previous: GalaxyDto;
  next: GalaxyDto;
}

export const GalaxyNavbar = ({ current, next, previous }: Props) => {
  return (
    <StyledWrapper>
      <GalaxyChange direction="left" galaxy={previous} />
      <GalaxyTitle> {current?.name} </GalaxyTitle>
      <GalaxyChange direction="right" galaxy={next} />
    </StyledWrapper>
  );
};
