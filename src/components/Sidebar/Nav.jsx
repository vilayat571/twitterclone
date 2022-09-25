import { useState } from "react";
import {
    ExporeIcon,
    HomeIcon,
    BookmarkIcon,
    ListsIcon,
    MessageIcon,
    MoreIcon,
    NotificationIcon,
    ProfileIcon
} from "../../icons/icon";
import Sidelink from "../../atoms/Sidebar/Sidelink";


function Nav() {

    const [active, setActive] = useState('Home');

    const handleClick = (name) => {
        setActive(name);
    };

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

    ];

    return (
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
    )
}

export default Nav;