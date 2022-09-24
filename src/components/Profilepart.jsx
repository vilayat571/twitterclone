import React from 'react'

function Profilepart() {
    return (
        <div className='flex justify-between items-center mb-6 hover:bg-gray-lightness cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200 '>
            <img src="https://pbs.twimg.com/profile_images/1573278897201872896/wGES5QnZ_400x400.png"
                className='h-11 w-11 rounded-full' alt="profile avatar" />
            <div className="flex flex-col ">
                <span className='font-bold text-md text-black'>Vilayat Safarov</span>
                <span className='text-sm text-gray-dark'>@safarov_vilayat</span>
            </div>
            <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-800 rounded-full' />
            <div className='w-1 h-1 bg-gray-800 rounded-full' />
            <div className='w-1 h-1 bg-gray-800 rounded-full' />
            </div>
        </div>
    )
}

export default Profilepart;