import React from "react";
import Image from "next/image";
import logoZippa from "../../assets/logo_white.svg";
import { Header, NavBarLogo } from "./styled";

export default function index() {
  return (
    <Header>
      <NavBarLogo>
        <Image src={logoZippa} alt={logoZippa} />
      </NavBarLogo>
      {/* <InputContainer>
        <JobTitleInput />
        <JobTitleInput />
      </InputContainer> */}
    </Header>
  );
}
