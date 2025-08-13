import * as THREE from "three";
import { useRef, useEffect } from "react";

export default function ThreeBg() {
  const containerRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      20000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Stars geometry
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.2,
    });
    const starVertices = [];
    const velocities = [];

    // Bigger sphere & minimum distance from camera
    const minRadius = 3000;
    const maxRadius = 8000;

    for (let i = 0; i < 1000; i++) {
      const radius =
        Math.random() * (maxRadius - minRadius) + minRadius; // far away only
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      starVertices.push(x, y, z);

      // Very slow drift
      velocities.push(
        (Math.random() - 0.5) * 0.002, // vx
        (Math.random() - 0.5) * 0.002, // vy
        (Math.random() - 0.5) * 0.002  // vz
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 0; // Put camera in the middle

    // Animation loop
    const animateLoop = () => {
      const positions = starGeometry.attributes.position.array;

      // Drift stars slowly
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i] * 0.5;
        positions[i + 1] += velocities[i + 1] * 0.5;
        positions[i + 2] += velocities[i + 2] * 0.5;
      }

      starGeometry.attributes.position.needsUpdate = true;

      // Tiny rotation for depth
      stars.rotation.y += 0.0002;

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animateLoop);
    };
    animateLoop();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      container.removeChild(renderer.domElement);
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{ overflow: "hidden" }}
    ></div>
  );
}
