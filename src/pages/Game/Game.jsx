import { createRoot } from 'react-dom/client';
import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from './Box';
import Background from './Background';
export function GameComponent(){
    return(
        <div>
            <Canvas camera={{ position: [0, 0, 2] }}>
                <Box position={[-0.75, 0, 0]} name="A" />
                <Box position={[0.75, 0, 0]} name="B" />
                {/* <Background /> */}
            </Canvas>
        </div>
    )
}
export default GameComponent