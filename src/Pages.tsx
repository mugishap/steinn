import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonComponent from './components/Common/CommonComponent'
import Charts from './pages/Charts/Charts'
import Discover from './pages/Discover/Discover'
import Favorites from './pages/Favorites/Favorites'
import Playlists from './pages/Playlists/Playlists'
import Search from './pages/Search/Search'

const Pages = () => {
    return (
        <BrowserRouter>
            <CommonComponent>
                <Routes>
                    <Route path={'/'} element={<Discover />}></Route>
                    <Route path={"/discover"} element={<Discover />}></Route>
                    <Route path='/search' element={<Search />}></Route>
                    <Route path='/search/:query' element={<Search />}></Route>
                    <Route path='/favorites' element={<Favorites />}></Route>
                    <Route path='/playlists' element={<Playlists />}></Route>
                    <Route path='/charts' element={<Charts />}></Route>
                </Routes>
            </CommonComponent>
        </BrowserRouter>
    )
}

export default Pages