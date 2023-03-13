import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Pages = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/' || "/discover"}></Route>
                    <Route path='/search'></Route>
                    <Route path='/search/:query'></Route>
                    <Route path='/favorites'></Route>
                    <Route path='/playlists'></Route>
                    <Route path='/charts'></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pages