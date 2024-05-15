import { IDoctor } from "@/types/doctor";
import { tagType } from "../tag-type";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        ContentType: "multipart/formData",
        data,
      }),
      invalidatesTags: [tagType.doctor],
    }),
    getDoctors: build.query({
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
      providesTags: [tagType.doctor],
    }),
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagType.doctor],
    }),
  }),
});

export const { useCreateDoctorMutation, useGetDoctorsQuery,useDeleteDoctorMutation } =
  doctorsApi as any;
