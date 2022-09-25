import React from 'react'
import Tweet from '../../components/Content/Tweet'

function Twetters({ tweets }) {
    return (
        <div>
            {
                tweets.map((item, index) => {
                    return (
                        <Tweet key={index} {...item} />
                    )
                })
            }
        </div>
    )
}

export default Twetters
