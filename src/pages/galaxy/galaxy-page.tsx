import { GalaxyNavbar } from '@components/galaxy';
import StyledWrapper from './galaxy-page.style';
import { InvilliaLogo } from '@components/invillia';
import { Planet } from '@components/planet/planet';
import { GalaxyDto } from 'dtos/galaxy.dto';
import Head from 'next/head';

interface Props {
  next: GalaxyDto;
  current: GalaxyDto;
  previous: GalaxyDto;
}

const GalaxyPage = ({ next, current, previous }: Props) => {
  current.planets.sort((a, b) => {
    const fa = a.name.toLowerCase();
    const fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  const posX = ['200px', '500px', '400px', '700px', '900px', '1200px'];
  const posY = ['200px', '200px', '500px', '500px', '300px', '200px'];

  const planets = [];
  if (current) {
    for (const [i, planet] of current.planets.entries()) {
      planets.push(
        <Planet
          planet={planet}
          posX={posX[i]}
          posY={posY[i]}
          key={`planet-${planet.name}`}
        />,
      );
    }
  }
  return (
    <>
      <Head>
        <title>Galaxy Meeting - {current.name.toUpperCase()} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledWrapper>
        <GalaxyNavbar current={current} next={next} previous={previous} />
        {planets}
        <InvilliaLogo>
          <img src="/logo_invillia.png" />
        </InvilliaLogo>
      </StyledWrapper>
    </>
  );
};

export default GalaxyPage;
