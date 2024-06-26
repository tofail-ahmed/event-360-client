
import { NavLink } from 'react-router-dom'
import { cn } from '../lib/utils'

const SideBar = () => {
  return (
    <div className="bg-rose-200 col-span-2 h-screen sticky top-0 left-0 overflow-auto ">
      <nav className="flex flex-col gap-4 mt-4 mx-2">
            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}  to={"/"}>Home</NavLink>

            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}  to={"/admin/service"}>Services</NavLink>
            
            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})} to={"/admin/addservice"}>Add Services</NavLink> 

            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}  to={"/admin/event"}>Event Items</NavLink>

            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})} to={"/admin/addevent"}>Add Event Items</NavLink> 
           
            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})} to={"/admin/recentEvent"}>Recent Events</NavLink> 
            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}  to={"/admin/addrecentevent"}>Add Recent Events</NavLink>
            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})} to={"/admin/review"}> Reviews</NavLink> 
            <NavLink className={({isActive})=>cn("p-3 bg-gray-400 rounded-md truncate transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}  to={"/admin/addreview"}>Add Reviews</NavLink>
            
      </nav>
    </div>
  )
}

export default SideBar