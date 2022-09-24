import { useState } from 'react';
import { useEffect } from 'react';
import Divider from '../components/Divider';
import Tweetbox from '../components/Tweetbox';
import db from '../firebase';
import { PopularIcon } from '../icons/icon';


const Content = () => {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {

    db.collection('feed')
      .orderBy('timeStamp', 'desc')
      .onSnapshot(snapShots => setTweets(snapShots.docs.map(doc => doc.data())))

  }, []);

  console.log(tweets)

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extralight">
      <header className='sticky top-0 z-10 flex justify-between items-center border-b p-4 border-gray-extralight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopularIcon className={'w-6 h-6 text-primary-base'} />
      </header>
      <div className='flex justify-between px-4 py-3 space-x-4'>
        <img src="https://pbs.twimg.com/profile_images/1573278897201872896/wGES5QnZ_400x400.png"
          className='h-11 w-11 rounded-full' alt="profile avatar" />
        <Tweetbox />
      </div>
      <Divider />
    </main>
  )
}

export default Content;