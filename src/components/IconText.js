import React from 'react'

function IconText({children, text}) {
    return (
        <div className='icon-text d-flex flex-column w-100 align-items-center justify-content-center mb-4'>
            {children}
            <span>{text}</span>
        </div>
    )
}

export default IconText
