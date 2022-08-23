import React, {useState} from 'react'
import {FormContainer, InputForm, InputLabel, SendForm} from './styled';
import IJobCard from '../../interfaces/IJobCard';
import { json } from 'body-parser';
import axios from 'axios';

export default function NewJobForm() {
  const [companyName, setCompanyName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  function handleClickForm(event) {
    event.preventDefault();
    const newJobObj: IJobCard = {
      companyName,
      jobTitle,
      description,
      location
    }
    axios.post(process.env.API_URL, newJobObj);
  }

  return (
      <FormContainer onSubmit={(event) => handleClickForm(event)}>
        <InputLabel>
        <span>Company Name:</span>
        <InputForm
        onChange={(event) => {setCompanyName(event.target.value)}}
        />
        </InputLabel>
        <InputLabel>
        <span>Job Title:</span>
        <InputForm
        onChange={(event) => {setJobTitle(event.target.value)}}
        />
        </InputLabel>
        <InputLabel>
        <span>Description:</span>
        <InputForm
        onChange={(event) => {setDescription(event.target.value)}}
        />
        </InputLabel>
        <InputLabel>
        <span>Location:</span>
        <InputForm
        onChange={(event) => {setLocation(event.target.value)}}
        />
        </InputLabel>
        <SendForm
        type='submit'
        >Send</SendForm>
      </FormContainer>
  )
}
