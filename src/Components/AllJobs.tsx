import React from "react";
import { useGetJobsQuery } from "../Redux/API/jobsApi";
import JobCard from "./JobCard";
import { setIsFormOpenInStore } from "../Redux/Slices/appSlice";
import { useAppDispatch } from "../Redux/Hooks";

interface Job {
  id: number;
}

const AllJobs = () => {
  const dispatch = useAppDispatch();

  const {
    data: jobsData,
    isLoading: isJobsLoading,
    error: jobsError,
  } = useGetJobsQuery<Job[] | any>({});



  return (
    <>
      <button
        className="flex justify-center absolute left-[20px] top-[20px] py-[8px] rounded-md bg-buttonBg text-white shadow-sm h-[37px] w-[100px] align-center"
        onClick={() => dispatch(setIsFormOpenInStore(true))}
      >
        Add Job
      </button>

      <div className="absolute left-[15%] flex flex-row flex-wrap w-[90%] gap-[50px]">
        {jobsData?.map((job: Job | any) => (
            // @ts-ignore
          <JobCard key={job.id} job={job}/>
        ))}
      </div>
    </>
  );
};

export default AllJobs;
