import React from "react";
import IJobCard from "../../interfaces/IJobCard";
import {
  CardContainer,
  CompanyName,
  Location,
  JobTitle,
  JobDescription,
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
      <div>{createdAt}</div>
    </CardContainer>
  );
}
