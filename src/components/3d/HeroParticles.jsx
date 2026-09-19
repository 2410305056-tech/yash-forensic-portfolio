import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { ErrorBoundary } from '../ErrorBoundary'

function FloatingDNAHelix() {
  const groupRef = useRef()
  const count = 100
  const points = useMemo(() => {
    const coords = new Float32Array(count * 2 * 3)
    const colors = new Float32Array(count * 2 * 3)
    const cyan = new THREE.Color('#00d4ff')
    const purple = new THREE.Color('#8b5cf6')

    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 8
      const radius = 1.8
      const height = (i / count) * 10 - 5

      coords[i * 6] = Math.cos(t) * radius
      coords[i * 6 + 1] = height
      coords[i * 6 + 2] = Math.sin(t) * radius
      cyan.toArray(colors, i * 6)

      coords[i * 6 + 3] = Math.cos(t + Math.PI) * radius
      coords[i * 6 + 4] = height
      coords[i * 6 + 5] = Math.sin(t + Math.PI) * radius
      purple.toArray(colors, i * 6 + 3)
    }
    return { coords, colors }
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15
    }
  })

  return (
    <group ref={groupRef} position={[3, 0, -2]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points.coords, 3]} />
          <bufferAttribute attach="attributes-color" args={[points.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function StarField() {
  const ref = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(1500)
    for (let i = 0; i < 500; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = Math.cbrt(Math.random()) * 8
      const sinPhi = Math.sin(phi)
      pos[i * 3] = r * sinPhi * Math.cos(theta)
      pos[i * 3 + 1] = r * sinPhi * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 20
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00d4ff"
          size={0.035}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  )
}

export default function HeroParticles() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener?.('change', apply)
    return () => mq.removeEventListener?.('change', apply)
  }, [])

  if (reduceMotion) {
    return <div className="absolute inset-0 z-0 pointer-events-none bg-cyber-grid opacity-40" />
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <ErrorBoundary fallback={<div className="absolute inset-0 bg-cyber-grid opacity-30" />}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 60 }}
          gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
          <StarField />
          <FloatingDNAHelix />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
