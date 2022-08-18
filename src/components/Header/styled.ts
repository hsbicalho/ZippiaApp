import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  background: #2c2c2c;
  border-radius: 0;
  min-height: 68px;
  z-index: 10;
`;

export const InputContainer = styled.div`
  background-color: white;
  margin: 16px;
  border-radius: 5px;
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  padding: 0 28px;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const JobTitleInput = styled.input`
  border-radius: 4px;
`;

export const NavBarLogo = styled.div`
  display: inline-block;
  font-size: 1.25rem;
  line-height: inherit;
  margin-left: 25rem;
  margin-right: 2rem;
  padding: 1rem;
  white-space: nowrap;
`;
