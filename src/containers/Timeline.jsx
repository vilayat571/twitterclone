import { SearchIcon } from "../icons/icon";
import { Timeline } from 'react-twitter-widgets'
import { useState } from "react";


const TimelinePart = () => {

  const [query, setQuery] = useState('');

  const [prof, setProf] = useState('elonmusk')

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setProf(query);

    setQuery('');

  };



  return (
    <div className="w-80">
      <div className="flex items-center w-80 space-x-4 pl-3 py-2 text-gray-dark m-3 bg-gray-200 rounded-full
      focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base  focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => handleChange(e)} value={query} type="text" placeholder="Search twitter"
            className="placeholder-gray-dark bg-transparent focus:outline-none w-full" />
        </form>
      </div>
      <div className="mt-5 ml-4">
        <Timeline
          // write for loading process  onLoad={() => alert('dede')}
          dataSource={{
            sourceType: 'profile',
            screenName: prof
          }}
          options={{
            height: '1000'
          }}
        />
      </div>
    </div>
  )
}

export default TimelinePart;

