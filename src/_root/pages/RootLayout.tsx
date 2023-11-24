import Bottombar from '@/components/shared/Bottombar'
import Toggle from '@/components/shared/Toggle'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom'



function RootLayout() {
  return (
    <div className='w-full md:flex'>
      <Topbar />
      <Toggle />

      <section className='flex flex-1 h-full'>
        <Outlet />

      </section>
      <Bottombar />
    </div>
  )
}

export default RootLayout;