import { useState } from 'react'
import db from '../../firebase/firebase';
import firebase from 'firebase';
import Iconsdiv from './Iconsdiv';

function Tweetbox() {

    const [val, setVal] = useState('');

    const sendTweet = () => {

        if (val !== '') {
            db.collection('tweets').add({
                displayName: "Vilayat Safarov",
                userName: "@safarov_vilayat",
                content: val,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
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
                <Iconsdiv />
                <button onClick={() => sendTweet()} className='bg-primary-base px-4 py-2 text-white rounded-full'>Tweet</button>
            </div>
        </div>
    )
}

export default Tweetbox;