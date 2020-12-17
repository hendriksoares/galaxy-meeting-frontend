import StyledWrapper from './traveler.style';

interface Props {
  traveler: any;
}

export const Traveler = ({ traveler }: Props) => {
  return (
    <StyledWrapper>
      <img src={traveler.avatar} />
      <div className="nick"> {traveler.nickname.substring(0, 2)} </div>
    </StyledWrapper>
  );
};
