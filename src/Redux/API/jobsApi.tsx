import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Job {}

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  tagTypes: ["JOBS"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getJobs: builder.query<undefined, any>({
      query: () => `/details`,
      providesTags: ["JOBS"],
    }),
    createJob: builder.mutation<Job, Partial<Job>>({
      query: (newJob) => ({
        url: "/details",
        method: "POST",
        body: newJob,
      }),
      invalidatesTags: ["JOBS"],
    }),
    deleteJob: builder.mutation<void, string>({
      query: (id) => ({
        url: `/details/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["JOBS"],
    }),
    editJob: builder.mutation<Job, { id: number | string; editJob: Partial<Job> | any }>({
      query: ({ id, editJob }) => ({
        url: `/details/${id}`,
        method: "PUT",
        body: editJob,
      }),
      invalidatesTags: ["JOBS"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
  useEditJobMutation,
} = jobsApi;
