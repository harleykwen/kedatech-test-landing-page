import React, { LazyExoticComponent, lazy } from 'react'
import ROUTE_PATH from './routePath'
import Error from '../pages/Error/Error'
import { Route, Routes } from 'react-router-dom'

const Landing: LazyExoticComponent<any> = lazy(() => import('../pages/Landing/Landing'))

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path={ROUTE_PATH?.LANDING} element={<Landing />} />
            <Route path='/*' element={<Error errorCode={404} errorMessage='PAGE NOT FOUND' />} />
        </Routes>
    )
}

export default Router