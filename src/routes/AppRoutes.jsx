import { Routes, Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import AdminLayout from '../layouts/AdminLayout'

import Home from '../pages/user/Home'
import AdminLogin from '../pages/admin/AdminLogin'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<div>Dashboard</div>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
