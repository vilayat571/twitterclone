import React from 'react'

function Sidelink({ name, Icon, onHandleClick, active }) {

    const isActive = active === name;

    return (
        <li className='group' onClick={() => onHandleClick(name)}>
            <a href={name.toLowerCase()} className='cursor-pointer block text-xl mb-1 pointer-events-none'>
                <div className="inline-block">
                    <div className={`flex items-center group-hover:bg-gray-lightness pl-3 pr-8 py-2 rounded-full
                    ${isActive ? 'font-bold' : ''}`}>
                        <Icon />
                        <span className='ml-4 '>
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default Sidelink;

//React-router must be integration