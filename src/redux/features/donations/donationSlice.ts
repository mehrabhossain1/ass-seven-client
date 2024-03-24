/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Donation {
  _id: string;
  title: string;
  category: string;
  amount: number;
}

const initialState = {
  donations: [],
  isLoading: false,
  isError: false,
};

const donationsSlice = createSlice({
  name: "donations",
  initialState,
  reducers: {
    setDonations: (state, action: any) => {
      state.donations = action.payload;
    },
    updateDonation: (state: any, action) => {
      state.donations = state.donations.map((donation: any) =>
        donation._id === action.payload._id ? action.payload : donation
      );
    },
    deleteDonation: (state: any, action: PayloadAction<Donation>) => {
      const { _id } = action.payload;
      state.donations = state.donations.filter(
        (donation: any) => donation._id !== _id
      );
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const {
  setDonations,
  updateDonation,
  deleteDonation,
  setLoading,
  setError,
} = donationsSlice.actions;

export default donationsSlice.reducer;
