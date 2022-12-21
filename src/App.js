
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Suspense } from 'react';
import React, { useRef } from 'react'
import { Cesar } from './components/Cesar';


function App() {
  return (
    <div className="Container"
    style={{width:"100%", height:"100vh"}}>
      
      <Canvas>
      
        
        <Suspense fallback={null}>
        
          <ambientLight/>
          <Cesar/>
          
          </Suspense>

        <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default App;
