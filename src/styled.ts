import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const JobSearchSection = styled.div`
  margin-left: 20rem;
  margin-right: 20rem;
`;

export const JobsContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-wrap: wrap;
  place-content: space-evenly;
`;

export const RecommendedForYou = styled.h1`
margin-left:3rem;
margin-top:100px;
margin-bottom: -140px;
`

export const FormsContainer = styled.div`
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  border-radius: .25em;
  overflow: hidden;
`

export const SelectCompany = styled.select`
  margin-left: 40px;
  position: relative;
  display: flex;
  width: 12em;
  height: 3em;
  border-radius: .25em;
  overflow: hidden;
  background-color: #3174ee;
  color:white;

    option{
      color:white;
      padding: 1em;
      background-color: #3174ee;
      transition: .25s all ease;
      pointer-events: none;

    }
`