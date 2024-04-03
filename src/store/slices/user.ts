import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {UserData} from '../../api/types';
import {getCurrentUser} from '../../api/getCurrentUser';
import {readUserToken, removeUserToken} from '../../storage/session';

type UserState = {
    status: 'idle' | 'loading' | 'success' | 'error'
    data: UserData | null
    error: string | null
};

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, {rejectWithValue}) => {
        const token = readUserToken();

        if (!token) {
            return null;
        }

        try {
            return getCurrentUser(token);
        } catch (ex) {
            removeUserToken();
            rejectWithValue(ex);
        }

        return null;
    },
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'idle',
        data: null,
        error: null,
    } as UserState,
    reducers: {
        logoutUser(state) {
            state.data = null;
            removeUserToken();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message as string;
            });
    },
});

export const userReducer = userSlice.reducer;
export const {logoutUser} = userSlice.actions;
