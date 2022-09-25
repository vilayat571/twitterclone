import { Timeline } from 'react-twitter-widgets';


function Timelinepart({ prof }) {
    return (
        <div className="mt-5 ml-4">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: prof
                }}
                options={{
                    height: '1000'
                }}
            />
        </div>
    )
}

export default Timelinepart;