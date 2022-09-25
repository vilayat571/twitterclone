import Dots from '../../atoms/Sidebar/Dots';
import Img from '../../atoms/Sidebar/Img';
import Userdetails from '../../atoms/Sidebar/Userdetails';

function Profilepart() {
    return (
        <div className='flex justify-between items-center mb-6 hover:bg-gray-lightness cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200 '>
            <Img />
            <Userdetails />
            <Dots />
        </div>
    )
}

export default Profilepart;