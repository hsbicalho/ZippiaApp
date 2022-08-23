import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import IJobCard from "../interfaces/IJobCard";
import Header from "../components/Header";
import { JobsContainer, PageContainer, JobSearchSection } from "./styled";
import dbConnect from "../lib/dbConnect";
import Job from "../models/Job";

interface HomeProps {
  jobs: IJobCard[];
}

function Home({ jobs }: HomeProps) {
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
    setJobData(jobs);
    setRenderedJobData(jobs);
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
              // eslint-disable-next-line no-underscore-dangle
              key={job._id}
              // eslint-disable-next-line no-underscore-dangle
              _id={job._id}
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
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Job.find({});
  const jobs = result.map((doc) => {
    const job = doc.toObject();
    job.createdAt = JSON.parse(JSON.stringify(job.createdAt));
    // eslint-disable-next-line no-underscore-dangle
    job._id = job._id.toString();
    return job;
  });

  return { props: { jobs } };
}
export default Home;
