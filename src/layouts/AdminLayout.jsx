import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/admin/AdminSidebar'

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <Outlet />
    </div>
  )
}

export default AdminLayout
