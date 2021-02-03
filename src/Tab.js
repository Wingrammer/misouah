import React from 'react'

function Tab({title, active}) {
    
    return (
        <div className={active && "yellowText"}>
            {title}
        </div>
    )
}

export default Tab
