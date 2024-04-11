import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: []
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, action) => {
            
            return action.payload;
        },
        addMessage: (state, action) => {
            if (!Array.isArray(state)) {
                // Nếu state không phải là một mảng, trả về một mảng chứa action.payload
                return [action.payload];
            }
            // Nếu state là một mảng, thêm action.payload vào mảng và trả về
            return [...state, action.payload];
        },


        
        removeMessage: (state, action) => {
            return state.filter(message => message.id !== action.payload);
        }
    }
});
export const { setMessages, addMessage, removeMessage } = messageSlice.actions;
export default messageSlice.reducer;