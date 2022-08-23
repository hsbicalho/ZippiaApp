import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #d8dee2;
  border-radius: 4px;
  width: 262px;
  height: 224px;
  margin-bottom: 1rem;
  padding: 1rem;
  max-height: 14rem;
  max-width: 14rem;
`;

export const CompanyName = styled.div`
  color: #333;
  display: flex;
  font-family: Open Sans;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.25;
  max-height: 60px;
  max-width: 100%;
  min-height: 25px;
  overflow: hidden;
  text-align: left;
  width: 100%;
`;

export const Location = styled.div`
  color: #7d878f;
  float: left;
  font-family: Open Sans;
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  letter-spacing: normal;
  line-height: normal;
  margin-top: -5px;
  width: 100%;
  min-height: 25px;
`;

export const JobTitle = styled.div`
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333;
  display: -webkit-box;
  font-family: Open Sans;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.25;
  margin-bottom: 10px;
  margin-top: 6px;
  max-height: 61px;
  max-width: 100%;
  min-height: 40px;
  overflow: hidden;
  text-align: left;
  width: 100%;
`;

export const JobDescription = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #7d878f;
  display: -webkit-box;
  font-size: 13px;
  max-width: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
`;

export const CreatedAt = styled.div`
  margin-top: 4rem;
  color:green;
`