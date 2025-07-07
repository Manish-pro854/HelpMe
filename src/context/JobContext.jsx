import React, { createContext, useState, useContext } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (jobData) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      { ...jobData, id: Date.now() },
    ]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

// Optional helper hook
export const useJobContext = () => useContext(JobContext);
