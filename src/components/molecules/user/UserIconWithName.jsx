import React, { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  // const { image, name, isAdmin } = props;
  const { image, name } = props;
  // const context = useContext(UserContext);
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <Scontainer>
      <SImg src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scontainer>
  );
});

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

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
