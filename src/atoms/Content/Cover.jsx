import React from 'react'

function Cover({image}) {
    return (
        <>
            {
                image && <img src={image} alt="description profile" className='mt-3 mx-4 w-11/12
                relative left-10 rounded-xl max-h-84' />
            }
        </>
    )
}

export default Cover
