import { createSlice } from '@reduxjs/toolkit';
const initState = {
    isAlert: false,
    isLoading: false,
    isShowModal: false,
    titleAlert: ""
}
const bootstrapSlice = createSlice({
    name : 'bootstrap',
    initialState : initState,
    reducers : {
        setIsAlert: (state, action) => {
            state.isAlert = action.payload.isAlert;
            state.titleAlert = action.payload.titleAlert;
        }
    }
})
export const { setIsAlert } = bootstrapSlice.actions;
export default bootstrapSlice.reducer;