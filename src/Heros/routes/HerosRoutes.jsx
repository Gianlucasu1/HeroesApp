import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../Authentication/pages/LoginPage'
import { DcPage, MarvelPage, Navbar, Search, Hero } from '../index'


export const HerosRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<MarvelPage></MarvelPage>}></Route>
          <Route path='/marvel' element={<MarvelPage></MarvelPage>}></Route>
          <Route path='/dc' element={<DcPage></DcPage>}></Route>
          <Route path='/hero' element={<Hero></Hero>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
        </Routes>
      </div>
    </>
  )
}
