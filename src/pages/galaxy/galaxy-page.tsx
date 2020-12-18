import { GalaxyNavbar } from '@components/galaxy';
import StyledWrapper from './galaxy-page.style';
import { InvilliaLogo } from '@components/invillia';
import { Planet } from '@components/planet/planet';

import Head from 'next/head';
import { GalaxyDto } from 'dtos/galaxy.dto';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  currentOrder: number;
}

const GalaxyPage = ({ currentOrder }: Props) => {
  const [galaxies, setGalaxies] = useState([]);
  let token = '';
  if (typeof window !== 'undefined') {
    token = sessionStorage.getItem('@GM-TOKEN');
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${process.env.GALAXY_MEETING_API}/galaxy`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setGalaxies(result.data);
    };
    fetchData();
  }, []);

  const nextOrder = (currentOrder + 1) % galaxies.length;
  const previousOrder = (currentOrder - 1 + galaxies.length) % galaxies.length;

  const previous = galaxies.filter(
    (x: GalaxyDto) => x.order == previousOrder,
  )[0];
  const current = galaxies.filter((x: GalaxyDto) => x.order == currentOrder)[0];
  const next = galaxies.filter((x: GalaxyDto) => x.order == nextOrder)[0];

  const posX = ['200px', '500px', '400px', '700px', '900px', '1200px'];
  const posY = ['200px', '200px', '500px', '500px', '300px', '200px'];

  const planets = [];
  if (current) {
    current.planets?.sort((a, b) => {
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
    for (const [i, planet] of current.planets?.entries()) {
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
        <title>Galaxy Meeting - {current?.name.toUpperCase()} </title>
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
