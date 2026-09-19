import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Html, Float, ContactShadows } from '@react-three/drei'
import { ErrorBoundary } from '../ErrorBoundary'

function EvidenceItem({ position, label, number, onClick, isSelected, children }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (hovered || isSelected ? 1.2 : 0.35)
    }
  })

  return (
    <group position={position}>
      <group
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
      >
        {children}
      </group>

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Html position={[0, 1.4, 0]} center distanceFactor={8} zIndexRange={[10, 0]}>
          <button
            type="button"
            onClick={onClick}
            className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 shadow-lg whitespace-nowrap ${
              isSelected || hovered
                ? 'bg-navy-900/90 border-cyan-accent text-cyan-accent shadow-[0_0_20px_rgba(0,212,255,0.6)] scale-110'
                : 'bg-navy-950/80 border-slate-700 text-slate-300 hover:border-cyan-accent hover:text-cyan-accent'
            }`}
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-accent/20 text-cyan-accent text-xs font-bold border border-cyan-accent/50 font-display">
              {number}
            </span>
            <span className="text-xs font-semibold tracking-wide font-display">{label}</span>
          </button>
        </Html>
      </Float>
    </group>
  )
}

function ResetHandler({ controlsRef }) {
  const { camera } = useThree()
  React.useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.object = camera
    }
  }, [camera, controlsRef])
  return null
}

function CrimeSceneRoom({ onSelectEvidence, selectedId, uvMode, controlsRef }) {
  const keyLight = uvMode ? '#c084fc' : '#00d4ff'
  const fillLight = uvMode ? '#7c3aed' : '#8b5cf6'

  return (
    <>
      <ambientLight intensity={uvMode ? 0.35 : 0.7} />
      <directionalLight position={[5, 8, 5]} intensity={uvMode ? 0.8 : 1.5} color={keyLight} />
      <pointLight position={[-4, 3, -2]} intensity={uvMode ? 2 : 1.2} color={fillLight} />
      <spotLight position={[0, 10, 0]} intensity={uvMode ? 0.4 : 1} color="#ffffff" angle={0.6} penumbra={0.8} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#07101E" roughness={0.4} metalness={0.8} />
      </mesh>
      <gridHelper args={[20, 20, keyLight, '#0A1424']} position={[0, -0.49, 0]} />

      <EvidenceItem
        position={[-3, 0.2, 1]}
        number="01"
        label="Latent Fingerprint"
        isSelected={selectedId === '01'}
        onClick={() => onSelectEvidence('01')}
      >
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.9, 0.2, 0.9]} />
          <meshStandardMaterial color="#0A1424" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.32, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.7, 0.7]} />
          <meshBasicMaterial color={uvMode ? '#c084fc' : '#00d4ff'} wireframe />
        </mesh>
      </EvidenceItem>

      <EvidenceItem
        position={[-1, 0.4, -2]}
        number="02"
        label="Toxicology Specimen"
        isSelected={selectedId === '02'}
        onClick={() => onSelectEvidence('02')}
      >
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.3, 0.5, 0.9, 16]} />
          <meshStandardMaterial color="#8b5cf6" opacity={0.8} transparent roughness={0.2} metalness={0.5} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.25, 0.42, 0.5, 16]} />
          <meshBasicMaterial color="#a78bfa" opacity={0.85} transparent />
        </mesh>
      </EvidenceItem>

      <EvidenceItem
        position={[1.5, 0.3, -1]}
        number="03"
        label="Digital Drive"
        isSelected={selectedId === '03'}
        onClick={() => onSelectEvidence('03')}
      >
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[1.2, 0.15, 0.6]} />
          <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh position={[0.4, 0.19, 0]}>
          <boxGeometry args={[0.15, 0.05, 0.2]} />
          <meshBasicMaterial color={uvMode ? '#c084fc' : '#00d4ff'} />
        </mesh>
      </EvidenceItem>

      <EvidenceItem
        position={[3.2, 0.3, 1.2]}
        number="04"
        label="Ballistics Casing"
        isSelected={selectedId === '04'}
        onClick={() => onSelectEvidence('04')}
      >
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.2, 0.22, 0.8, 16]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.24, 0.24, 0.08, 16]} />
          <meshStandardMaterial color="#d97706" metalness={1} roughness={0.3} />
        </mesh>
      </EvidenceItem>

      <ContactShadows position={[0, -0.48, 0]} opacity={0.6} scale={12} blur={1.5} far={4} />
      <OrbitControls
        ref={controlsRef}
        enableZoom
        maxDistance={12}
        minDistance={4}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 6}
        autoRotate={false}
      />
      <ResetHandler controlsRef={controlsRef} />
    </>
  )
}

export default function CrimeSceneCanvas({ onSelectEvidence, selectedId, uvMode = false }) {
  const controlsRef = useRef()

  const resetView = () => {
    controlsRef.current?.reset()
  }

  return (
    <div className="w-full h-[450px] sm:h-[550px] rounded-2xl overflow-hidden border border-cyan-accent/20 bg-navy-950 relative shadow-2xl">
      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 4, 8], fov: 50 }}
          gl={{ powerPreference: 'high-performance', antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener('webglcontextlost', (e) => e.preventDefault())
          }}
        >
          <Suspense fallback={null}>
            <CrimeSceneRoom
              onSelectEvidence={onSelectEvidence}
              selectedId={selectedId}
              uvMode={uvMode}
              controlsRef={controlsRef}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>

      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-slate-700/60 backdrop-blur-md text-xs text-slate-300">
        <span className="w-2 h-2 rounded-full bg-cyan-accent animate-ping" />
        <span>Simulation • Drag to rotate • Click a marker</span>
      </div>
      <button
        type="button"
        onClick={resetView}
        className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-slate-700/60 text-xs font-mono text-cyan-accent hover:border-cyan-accent"
      >
        Reset view
      </button>
    </div>
  )
}
