import { IDoctor } from "@/types/doctor";
import { tagType } from "../tag-type";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";
const scheduleApi:any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagType.schedule],
    }),
      getSchedule: build.query({
        query: (args: Record<string, any>) => ({
          url: "/doctor",
          method: "GET",
          params: args,
        }),
        transformResponse: (response: IDoctor[], meta: IMeta) => {
          return {
            doctors: response,
            meta,
          };
        },
        providesTags: [tagType.schedule],
      }),
      deleteSchedule: build.mutation({
        query: (id) => ({
          url: `/doctor/soft/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: [tagType.schedule],
      }),
  }),
});

export const {useCreateScheduleMutation} = scheduleApi as any;
