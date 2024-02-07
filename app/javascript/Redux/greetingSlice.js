import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGreeting = createAsyncThunk( "greeting/fetchGreeting",
    async () => {
        try {
            const response = await fetch("/api/greeting");
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
 })

const greetingSlice = createSlice({
    name: "greeting",
    initialState: {
        greeting: '',
        status: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGreeting.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchGreeting.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.greeting = action.payload;
        });
        builder.addCase(fetchGreeting.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export default greetingSlice.reducer;