import React, { LazyExoticComponent, lazy } from 'react'
import ROUTE_PATH from './routePath'
import Error from '../pages/Error/Error'
import { Route, Routes } from 'react-router-dom'
import LandingLayout from '../layouts/LandingLayout'

const Landing: LazyExoticComponent<any> = lazy(() => import('../pages/Landing/Landing'))

const Router: React.FC = () => {
    return (
        <Routes>
            <Route element={<LandingLayout />}>
                <Route path={ROUTE_PATH?.LANDING} element={<Landing />} />
            </Route>
            <Route path='/*' element={<Error errorCode={404} errorMessage='PAGE NOT FOUND' />} />
        </Routes>
    )
}

export default Router