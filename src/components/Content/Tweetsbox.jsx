import Img from "../../atoms/Sidebar/Img";
import Tweetbox from "./Tweetbox";


function Tweetsbox() {
  return (
    <div  className='flex justify-between px-4 py-3 space-x-4'>
      <Img />
      <Tweetbox />
    </div>
  )
}

export default Tweetsbox;