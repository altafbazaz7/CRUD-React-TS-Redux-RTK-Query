import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Job {
}

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getJobs: builder.query<Job | any, string>({
      query: (name) => `/details`,
    }),
    createJob: builder.mutation<Job, Partial<Job>>({
      query: (newJob) => ({
        url: "/details", 
        method: "POST",
        body: newJob,
      }),
    }),
  }),
});

export const { useGetJobsQuery, useCreateJobMutation } = jobsApi;
