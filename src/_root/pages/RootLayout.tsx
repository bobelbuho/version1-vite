import Bottombar from '@/components/ui/shared/Bottombar'
import Toggle from '@/components/ui/shared/Toggle'
import Topbar from '@/components/ui/shared/Topbar'
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

export default RootLayout