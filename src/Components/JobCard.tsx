// JobCard.tsx

import React from "react";
// @ts-ignore
import img from "../Assets/netflix.png";
import Pen from "../Assets/Pen";
import Bin from "../Assets/Bin";
import { useDeleteJobMutation } from "../Redux/API/jobsApi";

const JobCard: React.FC = ({ job }: any) => {
  // @ts-ignore
  const [deleteJob] = useDeleteJobMutation();

  const handleDelete = async (id: number | any) => {
    try {
      await deleteJob(id);
      console.log("Job deleted successfully");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };


  const handleEdit = async(id : number | any) => {
    
    try {
      console.log("Job deleted successfully");
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  }
  return (
    <div className="flex justify-start flex-row px-[16px] py-[24px] align-start gap-[10px]  rounded w-[357px] card__wrapper relative">
      <div className="edit_delete_wrapper absolute flex flex-row absolute top-[35px] right-[15px]">
        <Pen onClick={() => handleEdit(job.id)}/>
        <Bin onClick={() => handleDelete(job.id)} />
      </div>

      <img src={img} className="h-[48px] w-[48px]" alt="" />
      <div className="flex flex-col gap-[7px]">
        <h6 className="text-black font-poppins text-lg font-[500]">
          {job.jobTitle}
        </h6>

        <h5 className="text-black font-poppins text-base font-normal font-[400] text-md">
          {job.companyName} - {job.industry}
        </h5>
        <span className="text-gray-600 font-poppins text-base font-normal leading-6">
          {job.location}
        </span>

        {/* Additional details */}
        <span className="color-[#212427] text-sm font-poppins">
          Part Time(9:00am - 5:00pm) IST
        </span>
        <span className="color-[#212427] text-sm font-poppins">
          Experience ({job.experience} - {job.maxExperience}) years
        </span>
        <span className="color-[#212427] text-sm font-poppins">
          INR ($) {job.salary} - {job.maxSalary}
        </span>
        <span className="color-[#212427] text-sm font-poppins">
          51 - {job.totalEmployee} employees
        </span>
      </div>
    </div>
  );
};

export default JobCard;
