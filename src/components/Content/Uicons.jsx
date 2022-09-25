import Lidiv from '../../atoms/Content/Lidiv';
import Spdiv from '../../atoms/Content/Spdiv';
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from '../../icons/icon';

function Uicons() {
    return (
        <ul className='mt-3 w-11/12 relative left-10 flex justify-between max-w-md '>

            <Lidiv>
                <div className="group-hover:text-primary-base flex px-2 py-2 group-hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                    <ReplyIcon className={'w-5 h-5 '} />
                </div>
                <Spdiv className={'group-hover:text-primary-base relative right-3'} text={"83"} />
            </Lidiv>

            <Lidiv>
                <div className="flex px-2 py-2 group-hover:text-green-600 group-hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                    <RetweetIcon className={'w-5 h-5 '} />
                </div>
                <Spdiv className='group-hover:text-green-600 relative right-3' text={"120"} />
            </Lidiv>

            <Lidiv>
                <div className="flex px-2 py-2  group-hover:text-pink-600 group-hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                    <LikeIcon className={'w-5 h-5 '} />
                </div>
                <Spdiv className='group-hover:text-pink-600 relative right-3' text={"110"} />
            </Lidiv>

            <Lidiv>
                <div className="group-hover:text-primary-base flex px-2 py-2 group-hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                    <ShareIcon className={'w-5 h-5 '} />
                </div>
                <Spdiv className='group-hover:text-pink-600 relative right-3' text={"110"} />
            </Lidiv>

        </ul>
    )
}

export default Uicons;