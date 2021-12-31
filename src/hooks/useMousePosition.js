import React, { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [position, setPosition] =  useState({ x:0, y:0 }) //we are using here object as state as both x and y are going to change simultaneously, but in that case only one of the value was changing

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            });        
        }
        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [] )
    
    
    return position;
}

export { useMousePosition as default }