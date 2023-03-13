import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "songs",
    initialState: {
        newReleases: [],
        featuredPlaylists: [],
        categories: []
    },
    reducers: {
        load: (state, { payload }) => {
            state.categories = payload.categories
            state.featuredPlaylists = payload.featuredPlaylists
            state.newReleases = payload.newReleases
        },
        clear: (state) => {
            state.newReleases = []
            state.featuredPlaylists = []
            state.categories = []
        },
        setCategories: (state, { payload }) => {
            state.categories = payload
        },
        setFeaturedPlaylists: (state, { payload }) => {
            state.featuredPlaylists = payload
        },
        setNewReleases: (state, { payload }) => {
            state.newReleases = payload
        }
    }
})

export const { load, clear, setCategories, setFeaturedPlaylists, setNewReleases } = songsSlice.actions

export default songsSlice.reducer