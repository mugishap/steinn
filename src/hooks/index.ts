import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../api";
import { setCategories, setFeaturedPlaylists, setNewReleases } from "../redux/slices/songsSlice";

export const useNewReleases = async (setLoading: Function, dispatch: Dispatch) => {
    try {
        const request = await api.get("/browse/new-releases")
        const response = request.data
        dispatch(setNewReleases(response))
    } catch (error: any) {
        console.log(error);
        toast.error(error.message)
    }
}

export const useFeaturedPlaylists = async (setLoading: Function, dispatch: Dispatch) => {
    try {
        const request = await api.get("/browse/featured-playlists")
        const response = request.data
        dispatch(setFeaturedPlaylists(response))
    } catch (error: any) {
        console.log(error);
        toast.error(error.message)
    }
}

export const useCategories = async (setLoading: Function, dispatch: Dispatch) => {
    try {
        const request = await api.get("/browse/categories")
        const response = request.data
        dispatch(setCategories(response))
    } catch (error: any) {
        console.log(error);
        toast.error(error.message)
    }
}

export const useToken = async () => {
    try {
        const data = new URLSearchParams();
        data.append('grant_type', 'client_credentials');
        data.append('client_id', import.meta.env.VITE_SPOTIFY_CLIENT_ID);
        data.append('client_secret', import.meta.env.VITE_SPOTIFY_CLIENT_SECRET);

        const request = await axios.post('https://accounts.spotify.com/api/token', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const response = request.data
        localStorage.setItem("access_token", response.access_token)
        window.location.reload()
    } catch (error: any) {
        console.log(error);
        toast.error(error.message)
    }
}