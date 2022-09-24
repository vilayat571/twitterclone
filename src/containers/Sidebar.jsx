import { useState } from "react";
import Profilepart from "../components/Profilepart";
import Sidelink from "../components/Sidelink";
import {
  ExporeIcon,
  HomeIcon,
  BookmarkIcon,
  ListsIcon,
  MessageIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon
} from "../icons/icon";



const Sidebar = () => {

  const twitterUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png?20220821125553"


  const sideLinks = [

    {
      name: "Home",
      icon: HomeIcon
    },
    {
      name: "Explore",
      icon: ExporeIcon
    },
    {
      name: "Notifications",
      icon: NotificationIcon
    },
    {
      name: "Messages",
      icon: MessageIcon
    },
    {
      name: "Bookmarks",
      icon: BookmarkIcon
    },
    {
      name: "Lists",
      icon: ListsIcon
    },
    {
      name: "Profile",
      icon: ProfileIcon
    },
    {
      name: "More",
      icon: MoreIcon
    },

  ]

  const [active, setActive] = useState('Home');

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <div className="flex flex-col justify-between px-3 min-h-screen w-72">
      <div>
        <div className="mt-1 ml-1 mb-4 rounded-full flex justify-center items-center w-12 h-12 hover:bg-gray-lightness">
          <img src={twitterUrl} alt="twitter logo" className="w-8 h-6 rotate-8" />
        </div>
        <nav className="mb-4">
          <ul>
            {
              sideLinks.map(({ name, icon }) => (
                <Sidelink name={name} key={name} Icon={icon}
                  active={active} onHandleClick={handleClick} />
              ))
            }
          </ul>
        </nav>
        <button className="font-bold bg-primary-base hover:bg-blue-500 text-white py-3 px-8 shadow-lg w-11/12 rounded-full transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <Profilepart />
    </div>
  )
}

export default Sidebar;