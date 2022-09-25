import { useState } from "react";
import Timelinepart from "../../components/Timeline/Timelinepart";
import { SearchIcon } from "../../icons/icon";


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
    <div className="lg:w-80 md:w-full sm:w-full sticky top-0 h-screen lg:block ">
      <div className="flex items-center lg:w-80 md:w-full sm:w-full space-x-4 pl-3 py-2
       text-gray-dark m-3 bg-gray-200 rounded-full
      focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base  focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => handleChange(e)} value={query} type="text" placeholder="Search twitter"
            className="placeholder-gray-dark bg-transparent focus:outline-none w-full" />
        </form>
      </div>
      <Timelinepart prof={prof} />
    </div>
  )
}

export default TimelinePart;