import { useEffect, useState } from "react";
import fetchApi from "../helpers/API";
import JobCard from "../components/JobCard";
import IJobCard from "../interfaces/IJobCard";
import Header from "../components/Header";
import { JobsContainer, PageContainer, JobSearchSection } from "./styled";

function Home() {
  const [jobData, setJobData] = useState<IJobCard[]>([]);
  const [renderedJobData, setRenderedJobData] = useState<IJobCard[]>([]);
  const [companiesNames, setCompaniesNames] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>();

  const setTheCompaniesNames = () => {
    const filterNames = jobData.map((job: IJobCard) => job.companyName);
    const newFilteredNames = new Set(filterNames);
    setCompaniesNames(Array.from(newFilteredNames));
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    setTheCompaniesNames();
  }, [jobData]);

  useEffect(() => {
    const renderData = jobData.filter(
      (data: IJobCard) => data.companyName === selectedCompany && !undefined
    );
    if (renderData) setRenderedJobData(renderData);
  }, [selectedCompany]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    fetchApi().then((data: IJobCard[]) => {
      setJobData(data);
      setRenderedJobData(data);
    });
    setTheCompaniesNames();
  }, []);

  return (
    <PageContainer>
      <Header />
      <JobSearchSection>
        <select onChange={(event) => setSelectedCompany(event.target.value)}>
          {companiesNames.map((names: string) => (
            <option key={names} value={names}>
              {names}
            </option>
          ))}
        </select>
        <JobsContainer>
          {renderedJobData.map((job: IJobCard) => (
            <JobCard
              key={job.id}
              id={job.id}
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              description={job.description}
              location={job.location}
              createdAt={job.createdAt}
            />
          ))}
        </JobsContainer>
      </JobSearchSection>
    </PageContainer>
  );
}

export default Home;
