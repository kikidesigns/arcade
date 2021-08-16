import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import lerp from 'lerp'

export const Globe = () => {
  const group: any = useRef()
  const globe = useTexture('/earth.jpg')
  // const globe = useTexture('/globe.png')
  useFrame(({ clock, mouse }) => {
    group.current.rotation.y += 0.001
    //  = lerp(
    //   group.current.rotation.y,
    //   Math.PI / 5,
    //   0.005
    // )
  })

  return (
    <group
      ref={group}
      scale={[2, 2, 2]}
      position={[-1.5, -0.3, 0]}
      rotation={[-0.2, -0.7, 0]}
    >
      <mesh>
        <sphereGeometry args={[5, 50, 50]} />
        <meshStandardMaterial map={globe} roughness={1} fog={false} />
      </mesh>
    </group>
  )
}