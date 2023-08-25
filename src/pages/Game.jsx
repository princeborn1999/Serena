import { createRoot } from 'react-dom/client';
import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
export function GameComponent(){
    return(
        <div>
            <h1>This page is game demonstration</h1>
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas>
        </div>
    )
}
export default GameComponent