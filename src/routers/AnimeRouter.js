import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimeName } from '../components/pages/Anime'
import { Anime } from '../components/pages/Home'

export const AnimeRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Anime />} />
                <Route path="/:genreId/:animeId" element={<AnimeName />} />
            </Routes>
        </>
    )
}
