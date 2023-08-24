import { createRoot } from 'react-dom/client';
import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
export function GameComponent(){
    return(
        <div>
            <h1>This page is game demonstration</h1>
            <Canvas />
        </div>
    )
}
export default GameComponent