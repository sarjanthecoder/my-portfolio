import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const themes = ['green', 'cyan', 'purple', 'pink'];
const themeColors = {
  green: { primary: 0x39ff14, secondary: 0x00f0ff, tertiary: 0xb026ff },
  cyan: { primary: 0x00f0ff, secondary: 0xb026ff, tertiary: 0xff2d95 },
  purple: { primary: 0xb026ff, secondary: 0xff2d95, tertiary: 0x00f0ff },
  pink: { primary: 0xff2d95, secondary: 0xb026ff, tertiary: 0x00f0ff }
};

export default function UniverseCanvas({ currentTheme = 'green' }) {
  const containerRef = useRef(null);
  const stateRef = useRef({ isScrolling: false, isIdle: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Setup Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setClearColor(0x020408, 1);
    camera.position.z = 400;
    container.appendChild(renderer.domElement);

    // Hardware Adaptive Profiler (Mobile / Eco mode config)
    const isMobile = window.innerWidth <= 768;
    const isLowPower = isMobile || (window.devicePixelRatio > 1.5 && (navigator.deviceMemory || 8) < 8);
    const starCount = isLowPower ? 1500 : 5000;
    const nodeCount = isLowPower ? 20 : 65;
    const maxConnections = isLowPower ? 30 : 100;

    // Populate Stars
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    
    const activeColors = themeColors[currentTheme] || themeColors.green;
    const primaryCol = new THREE.Color(activeColors.primary);
    const secondaryCol = new THREE.Color(activeColors.secondary);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 2000;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 2000;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 2000;
      
      const r = Math.random();
      if (r < 0.3) {
        starColors[i3] = primaryCol.r; starColors[i3+1] = primaryCol.g; starColors[i3+2] = primaryCol.b;
      } else if (r < 0.5) {
        starColors[i3] = secondaryCol.r; starColors[i3+1] = secondaryCol.g; starColors[i3+2] = secondaryCol.b;
      } else {
        const b = 0.3 + Math.random() * 0.7;
        starColors[i3] = b; starColors[i3+1] = b; starColors[i3+2] = b;
      }
      starSizes[i] = Math.random() * 3.5 + 0.5;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    
    const starMaterial = new THREE.PointsMaterial({ 
      size: 2.2, 
      vertexColors: true, 
      transparent: true, 
      opacity: 0.85, 
      sizeAttenuation: true, 
      blending: THREE.AdditiveBlending 
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // AI Constellation Network
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeVelocities = [];

    for (let i = 0; i < nodeCount; i++) {
      const i3 = i * 3;
      nodePositions[i3] = (Math.random() - 0.5) * 900;
      nodePositions[i3+1] = (Math.random() - 0.5) * 600;
      nodePositions[i3+2] = -150 - Math.random() * 400;
      nodeVelocities.push(new THREE.Vector3((Math.random()-0.5)*0.4, (Math.random()-0.5)*0.4, (Math.random()-0.5)*0.25));
    }

    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({ 
      size: isMobile ? 3.5 : 5, 
      color: activeColors.primary, 
      transparent: true, 
      opacity: 0.85, 
      blending: THREE.AdditiveBlending 
    });
    const constellationNodes = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(constellationNodes);

    // Connecting Lines segments
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({ 
      vertexColors: true, 
      transparent: true, 
      opacity: 0.45, 
      blending: THREE.AdditiveBlending 
    });
    const constellationLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(constellationLines);

    // Mouse interactions
    let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0;
    
    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      resetIdleTimer();
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Parallax & Render Suspend
    let scrollTimeout = null;
    const handleScroll = () => {
      stateRef.current.isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        stateRef.current.isScrolling = false;
      }, 120);
      resetIdleTimer();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // WebGL Idle detection
    let idleTimeout = null;
    const resetIdleTimer = () => {
      stateRef.current.isIdle = false;
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        stateRef.current.isIdle = true;
      }, 4000);
    };
    
    const wakeUpEvents = ['click', 'touchstart', 'keydown'];
    wakeUpEvents.forEach(evt => window.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer();

    // Renderer loop
    const clock = new THREE.Clock();
    const cA = new THREE.Color();
    const cB = new THREE.Color();
    const themeCol = new THREE.Color();
    const secCol = new THREE.Color();
    let animationFrameId = null;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // WebGL Scroll Pause + Inactivity Skip
      if (stateRef.current.isScrolling || (stateRef.current.isIdle && !stateRef.current.isScrolling)) {
        return;
      }
      
      const t = clock.getElapsedTime();
      
      mouseX += (targetMouseX - mouseX) * 0.015;
      mouseY += (targetMouseY - mouseY) * 0.015;
      
      camera.position.x = mouseX * 40;
      camera.position.y = -mouseY * 40;
      camera.lookAt(0, 0, 0);
      
      stars.rotation.y = t * 0.015;
      stars.rotation.x = t * 0.004;

      // Update Constellation positions
      const positions = constellationNodes.geometry.attributes.position.array;
      const mouse3D = new THREE.Vector3(mouseX * 250, -mouseY * 180, -250);
      
      for (let i = 0; i < nodeCount; i++) {
        const i3 = i * 3;
        positions[i3] += nodeVelocities[i].x;
        positions[i3+1] += nodeVelocities[i].y;
        positions[i3+2] += nodeVelocities[i].z;
        
        // Gravity attraction
        const dx = positions[i3] - mouse3D.x;
        const dy = positions[i3+1] - mouse3D.y;
        const distSq = dx*dx + dy*dy;
        
        if (distSq < 22500) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / 150) * 1.8;
          positions[i3] -= (dx / dist) * force;
          positions[i3+1] -= (dy / dist) * force;
        }
        
        if (Math.abs(positions[i3]) > 480) nodeVelocities[i].x *= -1;
        if (Math.abs(positions[i3+1]) > 320) nodeVelocities[i].y *= -1;
        if (positions[i3+2] > -100 || positions[i3+2] < -550) nodeVelocities[i].z *= -1;
      }
      constellationNodes.geometry.attributes.position.needsUpdate = true;

      // Connections calculation (throttled to 30 FPS for extreme scrolling smoothness)
      if (Math.floor(t * 60) % 2 === 0) {
        const linePos = constellationLines.geometry.attributes.position.array;
        const lineCol = constellationLines.geometry.attributes.color.array;
        let lineIdx = 0;
        
        themeCol.setHex(activeColors.primary);
        secCol.setHex(activeColors.secondary);
        
        for (let i = 0; i < linePos.length; i++) {
          linePos[i] = 0;
          lineCol[i] = 0;
        }
        
        for (let i = 0; i < nodeCount; i++) {
          const i3 = i * 3;
          for (let j = i + 1; j < nodeCount; j++) {
            const j3 = j * 3;
            const dx = positions[i3] - positions[j3];
            const dy = positions[i3+1] - positions[j3+1];
            const dz = positions[i3+2] - positions[j3+2];
            const distSq = dx*dx + dy*dy + dz*dz;
            
            if (distSq < 14400 && lineIdx < maxConnections) {
              const dist = Math.sqrt(distSq);
              const lPos = lineIdx * 6;
              
              linePos[lPos] = positions[i3];
              linePos[lPos+1] = positions[i3+1];
              linePos[lPos+2] = positions[i3+2];
              linePos[lPos+3] = positions[j3];
              linePos[lPos+4] = positions[j3+1];
              linePos[lPos+5] = positions[j3+2];
              
              const alpha = (1 - dist / 120) * 0.35;
              cA.copy(themeCol).multiplyScalar(alpha);
              cB.copy(secCol).multiplyScalar(alpha);
              
              lineCol[lPos] = cA.r; lineCol[lPos+1] = cA.g; lineCol[lPos+2] = cA.b;
              lineCol[lPos+3] = cB.r; lineCol[lPos+4] = cB.g; lineCol[lPos+5] = cB.b;
              lineIdx++;
            }
          }
        }
        constellationLines.geometry.attributes.position.needsUpdate = true;
        constellationLines.geometry.attributes.color.needsUpdate = true;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      wakeUpEvents.forEach(evt => window.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimeout);
      clearTimeout(scrollTimeout);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [currentTheme]);

  return <div ref={containerRef} id="universe-canvas" className="animated-bg" />;
}