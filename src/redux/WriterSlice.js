import { createSlice } from '@reduxjs/toolkit';

const WriterSlice = createSlice(
    {
        name: 'writer',
        initialState: {
            writerDetailsInStore: { username: 'Sonu', email: 'sonu@gmail.com' }
        }
    }
);

export default WriterSlice.reducer;

