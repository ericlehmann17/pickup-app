import React from 'react'
import Button from './Button'

const Court = ({ key, court, onJoin, onLeave}) => {
    return (
        <div className='court'>
            <div className='courtDescription'>
                <div>Court: {court.area} {court.id}</div>
                <div>Players: {court.count}</div>
            </div>
            
            <Button text='Join' classname='btn-join' onClick={()=> onJoin(court.id) }/>
            <Button text='Leave' classname='btn-leave' onClick={()=> onLeave(court.id)}/>
        </div>
    )
}

//TODO
//Proptypes, defaults
export default Court
