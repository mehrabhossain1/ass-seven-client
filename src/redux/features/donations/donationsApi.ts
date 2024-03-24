import { baseApi } from "../../api/baseApi";
import { useAppDispatch } from "../../hooks";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    donations: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
    }),
  }),
});

export const { useDonationsQuery } = donationApi;

export const useCustomDispatch = () => {
  const dispatch = useAppDispatch();
  return dispatch;
};
