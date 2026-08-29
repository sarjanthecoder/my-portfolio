import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function UniverseCanvas({ currentTheme = 'light' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1500);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0); // Fully transparent so cosmic bg shows through!
    camera.position.z = 350;
    container.appendChild(renderer.domElement);

    const isMobile = window.innerWidth <= 768;
    const starCount = isMobile ? 800 : 2000;

    // Glowing Star Particles
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const isDark = currentTheme === 'dark';
    const primaryColor = new THREE.Color(isDark ? 0x60a5fa : 0x2563eb);
    const cyanColor = new THREE.Color(0x38bdf8);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 1600;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 1600;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 1200;

      const r = Math.random();
      if (r < 0.4) {
        starColors[i3] = primaryColor.r;
        starColors[i3 + 1] = primaryColor.g;
        starColors[i3 + 2] = primaryColor.b;
      } else if (r < 0.7) {
        starColors[i3] = cyanColor.r;
        starColors[i3 + 1] = cyanColor.g;
        starColors[i3 + 2] = cyanColor.b;
      } else {
        starColors[i3] = whiteColor.r;
        starColors[i3 + 1] = whiteColor.g;
        starColors[i3 + 2] = whiteColor.b;
      }
      starSizes[i] = Math.random() * 2.5 + 0.8;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.75 : 0.45,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Mouse movement parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const clock = new THREE.Clock();
    let animationFrameId = null;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.02;
      mouseY += (targetMouseY - mouseY) * 0.02;

      camera.position.x = mouseX * 25;
      camera.position.y = -mouseY * 25;
      camera.lookAt(0, 0, 0);

      stars.rotation.y = t * 0.008;
      stars.rotation.x = t * 0.003;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, [currentTheme]);

  return <div ref={containerRef} id="universe-canvas" className="animated-bg" />;
}