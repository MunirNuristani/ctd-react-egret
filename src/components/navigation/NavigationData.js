
import { FaXbox } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GiClockwork } from 'react-icons/gi'
import{ MdToday } from 'react-icons/md'
import { TiTickOutline } from 'react-icons/ti'
import { RiErrorWarningLine } from 'react-icons/ri'
import { IoStar } from 'react-icons/io5'
export const NavigationData =

 [
   {
    title: "Today",
    path: "/",
    icon: <MdToday className="nav-icon" />
   },
   {
    title: "Complete",
    path: "/complete",
    icon: <TiTickOutline className="nav-icon" />
   },
   {
    title: "Important",
    path: "/important",
    icon: <IoStar className="nav-icon" />
   },
   {
    title: "Over Due",
    path: "/over_due",
    icon: <RiErrorWarningLine className="nav-icon" />
   },
  {
    title: "Work",
    path: "/work",
    icon: <GiClockwork className="nav-icon" />,
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <BsPersonCircle className="nav-icon"/>,
  },
  {
    title: "Gaming",
    path: "/gaming",
    icon: <FaXbox className="nav-icon"/>,
  }
 ]
;
