import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";
import { Environment, OrbitControls } from '@react-three/drei';

export default function Viewer({ modelPath }) {
    const gltf = useLoader(GLTFLoader, modelPath)

    return (
        <>
            <div class="w-[1000px] h-[700px] bg-gray-600">
                <Canvas camera={{ fov: 35, zoom: 5, near: 1, far: 1000 }}>
                    <Suspense fallback={null}>
                        <primitive object={gltf.scene} />
                    </Suspense>
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
            </div>

        </>
    )
} 