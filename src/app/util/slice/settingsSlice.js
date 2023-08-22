import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEndpoint, patch } from "../api/Endpoints";

export const loadSettings = createAsyncThunk('settings/loadSettings', async () =>{
    const jsonResponse = await getEndpoint.info.userSettings();
    return jsonResponse;
});

export const patchSettings = createAsyncThunk('settings/patchSettings', async (settings) => {
    const jsonResponse = await patch.settings(settings);
    return jsonResponse;
})

const initialState = {
        userSettings: {},
        isLoading: false,
        hasError: false,
        isPatching: false,
        patchError: false
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeSetting (state, action) {
            state.userSettings.payload[action.payload] = !(state.userSettings.payload[action.payload]); // only boolean settings !
        },
    },
    extraReducers: {
        [loadSettings.pending]: (state, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadSettings.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            state.userSettings = payload;
        },
        [loadSettings.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [patchSettings.pending]: (state) => {
            state.isPatching = true;
            state.patchError = false;
        },
        [patchSettings.fulfilled]: (state) => {
            state.isPatching = false;
            state.patchError = false;
        },
        [patchSettings.rejected]: (state) => {
            state.isPatching = false;
            state.patchError = true;
        },
    }
});

export const { changeSetting } = settingsSlice.actions;
export const selectUserSettings = (state) => state.settings;
export default settingsSlice.reducer;