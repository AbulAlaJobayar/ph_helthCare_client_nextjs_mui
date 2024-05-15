import { tagType } from "../tag-type";
import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        ContentType: "multipart/formData",
        data,
      }),
      invalidatesTags: [tagType.specialties],
    }),
    getSpecialty: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagType.specialties],
    }),
    deleteSpecialty: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagType.specialties],
    }),
  }),
});

export const { useCreateSpecialtyMutation, useGetSpecialtyQuery,useDeleteSpecialtyMutation } =
  specialtiesApi as any;
