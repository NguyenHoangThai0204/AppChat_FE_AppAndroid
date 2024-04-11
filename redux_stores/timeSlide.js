import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    times: []
};

const timeSlide = createSlice({
    name: 'times',
    initialState,
    reducers: {
        setTime: (state, action) => {
            
            return action.payload;
        },
        addTime: (state, action) => {
            if (!Array.isArray(state)) {
                // Nếu state không phải là một mảng, trả về một mảng chứa action.payload
                return [action.payload];
            }
            // Nếu state là một mảng, thêm action.payload vào mảng và trả về
            return [...state, action.payload];
        },


        
        removeTime: (state, action) => {
            return state.filter(time => time.id !== action.payload);
        }
    }
});
export const { setTime, addTime, removeTime } = timeSlide.actions;
export default timeSlide.reducer;