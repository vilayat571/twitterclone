import Cover from '../../atoms/Content/Cover';
import Img from '../../atoms/Sidebar/Img';
import Contentheader from './Contentheader';
import Uicons from './Uicons';

function Tweet({ displayName, userName, content, timeStamp, image, avatar }) {
    return (
        <article className='flex 
        flex-col border-b px-4 py-3 space-x-3 cursor-pointer'>
            <div className='flex'>
                <Img />
                <Contentheader
                    displayName={displayName}
                    userName={userName}
                    timeStamp={timeStamp}
                    avatar={avatar}
                    content={content}
                />
            </div>
            <Cover image={image} />
            <Uicons />
        </article>
    )
}

export default Tweet;