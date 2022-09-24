import React from 'react'
import { useState } from 'react'
import { EmojiIcon, GifIcon, LocationIcon, MediaIcon, PollIcon, ScheduleIcon } from '../icons/icon'
import db from '../firebase';
import firebase from 'firebase';

function Tweetbox() {

    const [val, setVal] = useState('');

    const sendTweet = () => {

        if (val !== '') {
            db.collection('feed').add({
                displayName: "Vilayat Safarov",
                userName: "@safarov_vilayat",
                content: val,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                image:"https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
                avatar: "https://pbs.twimg.com/profile_images/1573278897201872896/wGES5QnZ_400x400.png"
            })
        };

        setVal('');

    }

    return (
        <div className='flex-1 flex flex-col px-2 mt-2 '>
            <textarea value={val} onChange={(e) => setVal(e.target.value)} className='w-full outline-none text-lg placeholder-gray-dark overflow-hidden resize-none bg-transparent'
                placeholder="What's happening?" ></textarea>
            <div className="flex justify-between items-center">
                <div className='flex -ml-3'>
                    <div className="px-2 py-2 hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                        <MediaIcon className={'w-5 h-5 text-primary-base'} />
                    </div>

                    <div className="px-2 py-2 hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                        <GifIcon className={'w-5 h-5 text-primary-base'} />
                    </div>

                    <div className="px-2 py-2 hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                        <PollIcon className={'w-5 h-5 text-primary-base'} />
                    </div>

                    <div className="px-2 py-2 hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                        <EmojiIcon className={'w-5 h-5 text-primary-base'} />
                    </div>

                    <div className="px-2 py-2 hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                        <ScheduleIcon className={'w-5 h-5 text-primary-base'} />
                    </div>

                    <div className="px-2 py-2 hover:bg-gray-extralight transform transition-colors duration-200 rounded-full">
                        <LocationIcon className={'w-5 h-5 text-primary-base'} />
                    </div>
                </div>
                <button onClick={() => sendTweet()} className='bg-primary-base px-4 py-2 text-white rounded-full'>Tweet</button>
            </div>
        </div>
    )
}

export default Tweetbox

/* 
1)type eror
2) Firebase crash course
*/