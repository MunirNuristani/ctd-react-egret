
import { FaXbox } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GiClockwork } from 'react-icons/gi'


export const NavigationData = [
  {
    title: "Work",
    path: "/work",
    icon: <GiClockwork className="iconClass" />,
  },
  {
    title: "Personal",
    path: "/personal",
    icon: <BsPersonCircle className="iconClass"/>,
  },
  {
    title: "Gaming",
    path: "/gaming",
    icon: <FaXbox className="iconClass"/>,
  }
];
