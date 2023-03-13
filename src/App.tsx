import React, { useEffect, useState } from "react"
import { CommonContext } from "./context"
import Pages from "./Pages"
import "./App.css"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useCategories, useFeaturedPlaylists, useNewReleases, useToken } from "./hooks"
import { useDispatch, useSelector } from "react-redux"
import { RiLoader2Line, RiLoaderFill, RiLoaderLine } from "react-icons/ri"

function App() {

  const [loading, setLoading] = useState(true)

  const getSongs = async () => {

    if (!localStorage.getItem('access_token'))  await useToken()
    await useNewReleases(setLoading, dispatch)
    await useFeaturedPlaylists(setLoading, dispatch)
    await useCategories(setLoading, dispatch)
    setLoading(false)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    getSongs()
  }, [])

  const newReleases = useSelector((state: any) => state.songs.newReleases)
  const featuredPlaylists = useSelector((state: any) => state.songs.featuredPlaylists)
  const categories = useSelector((state: any) => state.songs.categories)

  return (
    <CommonContext.Provider value={{
      newReleases,
      featuredPlaylists,
      categories
    }}>
      <ToastContainer theme="colored" position="top-right" hideProgressBar={true} />
      {loading ?
        <span>
          <RiLoaderFill />
        </span>
        :
        <Pages />}
    </CommonContext.Provider>
  )
}

export default App
