import StyledWrapper from './planet-info.style';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  planetId: string;
  link: string;
}

export const PlanetInfo = ({ planetId, link }: Props) => {
  const router = useRouter();

  const travelTo = async () => {
    const token = sessionStorage.getItem('@GM-TOKEN');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);

    await fetch('http://localhost:3000/planet/meeting/join', {
      method: 'POST',
      body: JSON.stringify({ planetId }),
      headers,
    });
    router.reload();
  };

  return (
    <StyledWrapper>
      <a onClick={travelTo}>Viajar para o Planeta </a>
      <Link href={link}>
        <a target="_blank"> Ingressar na Video Conferência </a>
      </Link>
    </StyledWrapper>
  );
};
