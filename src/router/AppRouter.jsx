import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Authentication/pages/LoginPage'
import { Navbar, DcPage, MarvelPage, HerosRoutes } from '../Heros'


export const AppRouter = () => {
  return (
    <>
        <Routes> 
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/*' element={<HerosRoutes></HerosRoutes>}></Route>
        </Routes>
    </>
  )
}
