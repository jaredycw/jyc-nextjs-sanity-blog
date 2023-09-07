"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function CraftSection() {
  const containerRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Create a scene
    const scene = new THREE.Scene();
    {
        const near = 10;
        const far = 100;
        scene.fog = new THREE.Fog(near, far);
    }
    scene.background = new THREE.Color('lightblue');

    // Create a camera
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add responsive canvas handling
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    const radius =  6.6;  
    const tubeRadius =  1.0;  
    const radialSegments = 30;  
    const tubularSegments =  44;  
    const p =  2;  
    const q =  9;  
    const geometry = new THREE.TorusKnotGeometry(
	radius, tubeRadius, tubularSegments, radialSegments, p, q );

    const material = new THREE.MeshLambertMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Center the cube within the scene
    cube.position.set(0, 5, 0);

    // Add mouse controls
    const controls = new OrbitControls(camera, canvas);
    controls.update();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
