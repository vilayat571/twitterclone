import { useState, useEffect } from 'react';
import Divider from '../../atoms/Content/Divider';
import Header from '../../atoms/Content/Header';
import Tweetsbox from '../../components/Content/Tweetsbox';
import Twetters from '../../atoms/Content/Twetters';
import db from '../../firebase/firebase';


const Content = () => {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {

    db.collection('tweets')
      .orderBy('timeStamp', 'desc')
      .onSnapshot(snapShots => setTweets(snapShots.docs.map(doc => doc.data())))

  }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extralight">
      <Header />
      <Tweetsbox />
      <Divider />
      <Twetters tweets={tweets} />
    </main>
  )
}

export default Content;