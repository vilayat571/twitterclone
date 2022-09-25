import Buton from "../../atoms/Sidebar/Buton";
import Headerpart from "../../components/Sidebar/Headerpart";
import Nav from "../../components/Sidebar/Nav";
import Profilepart from "../../components/Sidebar/Profilepart";


const Sidebar = () => {

  return (
    <div className="lg:block md:hidden sm:hidden flex flex-col justify-between px-3 h-screen bg-white z-10 sticky top-0 w-72">
      <Headerpart />
      <Nav />
      <Buton />
      <Profilepart />
    </div>
  )
}

export default Sidebar;