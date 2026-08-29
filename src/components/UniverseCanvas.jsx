import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function UniverseCanvas({ currentTheme = 'light' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // On mobile devices, don't run heavy continuous WebGL canvas to preserve 60fps scrolling and battery
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Performance boost
      alpha: true,
      powerPreference: 'high-performance',
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25)); // Cap pixel ratio to save GPU fill rate
    renderer.setClearColor(0x000000, 0);
    camera.position.z = 320;
    container.appendChild(renderer.domElement);

    // Optimized star count
    const starCount = 600;

    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const isDark = currentTheme === 'dark';
    const primaryColor = new THREE.Color(isDark ? 0x60a5fa : 0x2563eb);
    const cyanColor = new THREE.Color(0x38bdf8);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 1400;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 1400;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 800;

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
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.7 : 0.35,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false, // Huge performance optimization for particles
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Mouse movement parallax (throttled)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Intersection & Visibility Observer: Pause rendering when scrolled past hero / out of view
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let animationFrameId = null;
    let lastTime = 0;
    const fpsInterval = 1000 / 45; // Smooth 45fps cap for background canvas saves 50% GPU load

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || document.hidden) return;

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = currentTime - (elapsed % fpsInterval);

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      camera.position.x = mouseX * 20;
      camera.position.y = -mouseY * 20;
      camera.lookAt(0, 0, 0);

      stars.rotation.y += 0.0008;
      stars.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };
    animationFrameId = requestAnimationFrame(animate);

    let resizeTimeout = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, [currentTheme]);

  return <div ref={containerRef} id="universe-canvas" className="animated-bg" />;
}