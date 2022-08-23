import React from "react";
import IJobCard from "../../interfaces/IJobCard";
import timeSince from '../../helpers/timeSincePosted'
import {
  CardContainer,
  CompanyName,
  Location,
  JobTitle,
  JobDescription,
  CreatedAt,
} from "./styled";

export default function jobCard({
  companyName,
  jobTitle,
  description,
  location,
  createdAt,
}: IJobCard) {

  return (
    <CardContainer>
      <CompanyName>{companyName}</CompanyName>
      <Location>{location}</Location>
      <JobTitle>{jobTitle}</JobTitle>
      <JobDescription>{description}</JobDescription>
      <CreatedAt>{timeSince(createdAt)} ago</CreatedAt>
    </CardContainer>
  );
}
