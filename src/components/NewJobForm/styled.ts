import styled from "styled-components";

export const FormContainer = styled.form`
  display:flex;
  flex-direction:column;
`

export const InputForm = styled.input`
  width: 20rem;
  margin-left: auto;
  margin-top: 0.2rem;
`
export const InputLabel = styled.label`
  margin-left: 2.5rem;
  width: fit-content;
  display:flex;
  gap: 16px;
  span{
    width:8rem;
  }
` 
export const SendForm = styled.button`
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