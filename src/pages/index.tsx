import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import IJobCard from "../interfaces/IJobCard";
import Header from "../components/Header";
import {
  JobsContainer,
  PageContainer,
  JobSearchSection,
  RecommendedForYou,
  FormsContainer,
  SelectCompany,
  LastSevenDaysButton,
  AllJobs,
} from "../styled";
import dbConnect from "../lib/dbConnect";
import Job from "../models/Job";
import postedLastSevenDays from '../helpers/postedLastSevenDays';

interface HomeProps {
  jobs: IJobCard[];
}

function Home({ jobs }: HomeProps) {
  // State to keep all Data From the database available
  const [jobData, setJobData] = useState<IJobCard[]>([]);
  // State to set Rendered elements on the page
  const [renderedJobData, setRenderedJobData] = useState<IJobCard[]>([]);
  //State to get the name from all companies to filter on Select by name
  const [companiesNames, setCompaniesNames] = useState<string[]>([]);
  //State to set the selected company
  const [selectedCompany, setSelectedCompany] = useState<string>();

  const setTheCompaniesNames = () => {
    const filterNames = jobData.map((job: IJobCard) => job.companyName);
    const newFilteredNames = new Set(filterNames);
    setCompaniesNames(Array.from(newFilteredNames));
  };
  const handleSevenDaysButton = () => {
    // there are no jobs with post date longer then 7 days, so shows everything
    const newRenderData = jobData.filter(((data: IJobCard) => postedLastSevenDays(data.createdAt)))
    setRenderedJobData(newRenderData);
  }
  useEffect(() => {
    //UseEffect to get all companies names and set on companiesNames State
    // eslint-disable-next-line no-console
    setTheCompaniesNames();
  }, [jobData]);

  useEffect(() => {
    //UseEffect to set the selected company name and change the rendered state
    const renderData = jobData.filter(
      (data: IJobCard) => data.companyName === selectedCompany && !undefined
    );
    if (renderData) setRenderedJobData(renderData);
  }, [selectedCompany]);

  useEffect(() => {
    //Start UseEffect to get all datas from the database (MongoDB) and set State
    // eslint-disable-next-line no-console
    setJobData(jobs);
    setRenderedJobData(jobs);
    setTheCompaniesNames();
  }, []);
  return (
    <PageContainer>
      <Header />
      <JobSearchSection>
      <FormsContainer>
        {/*button that will offer the jobs by company name. */}
      <AllJobs onClick={() => setRenderedJobData(jobData)}>All</AllJobs>
        <SelectCompany onChange={(event) => setSelectedCompany(event.target.value)}>
          {companiesNames.map((names: string) => (
            <option key={names} value={names}>
              {names}
            </option>
          ))}
        </SelectCompany>
        {/* button that will display only the jobs published in the last 7 days. */}
        <LastSevenDaysButton onClick={() => handleSevenDaysButton()}>Last 7 days</LastSevenDaysButton>
        </FormsContainer>
          <RecommendedForYou>RECOMMENDED FOR YOU</RecommendedForYou>
        <JobsContainer>
          {/* slice to show only 10 elements as requested*/}
          {renderedJobData.slice(0,10).map((job: IJobCard) => (
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
