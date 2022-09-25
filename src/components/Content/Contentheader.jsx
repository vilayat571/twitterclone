import Contentp from "../../atoms/Content/Contentp";

function Contentheader({ displayName, userName, timeStamp, content }) {
    return (
        <div className="flex flex-col">
            <div className='flex items-center text-sm ml-2'>
                <h4 className='font-bold'>{displayName}</h4>
                <span className='ml-2 text-gray-dark'>{userName}</span>
                <div className="bg-gray-dark mx-1 h-1 w-1 border rounded-full"></div>
                <span className='text-gray-dark'>
                    {timeStamp?.toDate().toLocaleTimeString('az-Az')}
                </span>
            </div>
            <Contentp content={content} />
        </div>
    )
}

export default Contentheader;