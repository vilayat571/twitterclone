import Singleicon from '../../atoms/Content/Singleicon';
import { EmojiIcon, GifIcon, LocationIcon, MediaIcon, PollIcon, ScheduleIcon } from '../../icons/icon';


function Iconsdiv() {
    return (
        <div className='flex -ml-3'>

            <Singleicon>
                <MediaIcon className={'w-5 h-5 text-primary-base'} />
            </Singleicon>

            <Singleicon>
                <GifIcon className={'w-5 h-5 text-primary-base'} />
            </Singleicon>

            <Singleicon>
                <PollIcon className={'w-5 h-5 text-primary-base'} />
            </Singleicon>

            <Singleicon>
                <EmojiIcon className={'w-5 h-5 text-primary-base'} />
            </Singleicon>

            <Singleicon>
                <ScheduleIcon className={'w-5 h-5 text-primary-base'} />
            </Singleicon>

            <Singleicon>
                <LocationIcon className={'w-5 h-5 text-primary-base'} />
            </Singleicon>

        </div>
    )
}

export default Iconsdiv;