import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const JobSearchSection = styled.div`
  max-width: 80rem;
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
margin-bottom: -150px;
`

export const FormsContainer = styled.div`
  margin-left:2rem;
  margin-top:5rem;
  position: relative;
  display: flex;
  width: auto;
  height: 3em;
  border-radius: .25em;
  overflow: hidden;
`

export const SelectCompany = styled.select`
  margin-left: 0.5rem;
  position: relative;
  display: flex;
  width: 12em;
  height: 3em;
  border: none;
  border-radius: 4px;
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

export const LastSevenDaysButton = styled.div`
  margin-left: 0.5rem;
  position: relative;
  display: flex;
  justify-content:center;
  align-items:center;
  width: 6rem;
  height: 2.52em;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  background-color: #3174ee;
  color:white;
  `
  export const AllJobs = styled.div`
  margin-left: 0.5rem;
  position: relative;
  display: flex;
  justify-content:center;
  align-items:center;
  width: 6rem;
  height: 2.52em;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  background-color: #3174ee;
  color:white;
  `

export const ToggleFormButton = styled.button`
  margin-left: 2.5rem;
  position: relative;
  display: flex;
  justify-content:center;
  align-items:center;
  width: 6rem;
  height: 2.52em;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  background-color: #3174ee;
  color:white;
`