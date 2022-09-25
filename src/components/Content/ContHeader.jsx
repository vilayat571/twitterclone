import Contentp from '../../atoms/Content/Contentp'
import Cover from '../../atoms/Content/Cover'
import Contentheader from './Contentheader'
import Uicons from './Uicons';

function ContHeader({ displayName, userName, content, timeStamp, image }) {
    return (
        <div className="flex-1">
            <Contentheader displayName={displayName} userName={userName} timeStamp={timeStamp} />
            <Contentp content={content} />
            <Cover image={image} />
            <Uicons />
        </div>
    )
}

export default ContHeader;