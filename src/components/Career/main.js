import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Content from "./content";
import CareerHead from "./CareerHead";
import Card from "./Card";
import JobCard from "./JobCard";
import HowToApplyHead from "./HowToApply";
import { jobsData } from "./jobsData";
import * as Realm from "realm-web";
import { Helmet } from "react-helmet";

export default function Main() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const app = new Realm.App({ id: "application-0-rpwpphv" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const mongodb = app.currentUser.mongoClient("mongodb-atlas");
        const collection = mongodb.db("jobs").collection("data");
        const jobsData = await collection.find({});
        setJobs(jobsData);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers - Bright Airways</title>
        <meta name="description" content="Careers" />
      </Helmet>
      <Banner />
      <CareerHead />
      <Content />

      {/* MongoDB Jobs */}
      {/* {jobs.length === 0 ? (
        <div className="text-center text-danger">
          <h3 className="text-danger mt-5 mb-5">No jobs available right now</h3>
        </div>
      ) : (
        jobs.map((job, index) => (
          <Card
            key={index}
            heading={job.title}
            img={job.image}
            aboutJob={job.about}
            point1={job.keyPoints[0]}
            point2={job.keyPoints[1]}
            point3={job.keyPoints[2]}
            point4={job.keyPoints[3]}
            point5={job.keyPoints[4]}
            point6={job.keyPoints[5]}
            point7={job.keyPoints[6]}
            point8={job.keyPoints[7]}
          />
        ))
      )} */}

      {/* Static Job Listings */}
      <div className="container-fluid mt-5">
        <h2 className="text-center mb-4">Current Job Openings</h2>
        {jobsData.map((job, index) => (
          <JobCard
            key={job.id}
            index={index}
            title={job.title}
            image={job.image}
            description={job.description}
            responsibilities={job.responsibilities}
            salary={job.salary}
            qualification={job.qualification}
            totalVacancies={job.totalVacancies}
            showApplyButton={job.showApplyButton}
            applyButtonText={job.applyButtonText}
            applyButtonDisabled={job.applyButtonDisabled}
          />
        ))}
      </div>

      <HowToApplyHead />
    </>
  );
}
