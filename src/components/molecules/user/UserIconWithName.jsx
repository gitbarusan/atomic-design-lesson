import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <Scontainer>
      <SImg src={image} alt={name} />
      <SName>{name}</SName>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 160px;
  height: 160px;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
