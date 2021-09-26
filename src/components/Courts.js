import React from 'react'
import Court  from './Court'

const Courts = ({ courts, onJoin, onLeave }) => {
    return (
        <div className='courts'>
            <h1>Available Courts</h1>
            {courts.map((court)=>(
                <Court 
                key={court.id} 
                court={court}
                onJoin={onJoin}
                onLeave={onLeave} />
            ))}
        </div>
    )
}
//TODO
//Proptypes, defaults
export default Courts
