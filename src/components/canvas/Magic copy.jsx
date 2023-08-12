import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
// import { MagicEnvironment } from './MagicEnvironment';
// import { CreateParticles } from './CreateParticles';

const MagicEnvironment = ({ font, particle }) => {
  const magicEnvironmentRef = React.useRef(null);

  React.useEffect(() => {
    const container = magicEnvironmentRef.current;
    const scene = new THREE.Scene();
    const camera = createCamera(container);
    const renderer = createRenderer(container);
    const createParticles = new CreateParticles(scene, font, particle, camera, renderer);

    bindEvents(container, camera, renderer);
    setup(createParticles);
    render(createParticles, renderer, scene, camera);
  }, [font, particle]);

  const bindEvents = (container, camera, renderer) => {
    window.addEventListener('resize', () => onWindowResize(container, camera, renderer));
  };

  const setup = (createParticles) => {
    createParticles.setup();
  };

  const render = (createParticles, renderer, scene, camera) => {
    createParticles.render();
    renderer.render(scene, camera);
  };

  const createCamera = (container) => {
    const camera = new THREE.PerspectiveCamera(65, container.clientWidth / container.clientHeight, 1, 10000);
    camera.position.set(0, 0, 100);
    return camera;
  };

  const createRenderer = (container) => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);
    renderer.setAnimationLoop(() => render(createParticlesRef.current, renderer, sceneRef.current, cameraRef.current));
    return renderer;
  };

  const onWindowResize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  return <div id="magic" ref={magicEnvironmentRef} />;
};

class CreateParticles extends React.Component {
  constructor(props) {
    super(props);
    this.font = props.font;
    this.particle = props.particle;
    this.particlesRef = null;
  }

  createParticles() {
    const particleCount = 1000;
    const particles = new THREE.Geometry();
    const particleMaterial = new THREE.PointsMaterial({
      size: 10,
      map: new THREE.TextureLoader().load(this.particle),
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      const particle = new THREE.Vector3(x, y, z);
      particle.velocity = new THREE.Vector3(
        0,
        -Math.random(),
        0
      ).normalize();
      particles.vertices.push(particle);
    }

    const particleSystem = new THREE.Points(particles, particleMaterial);
    this.particlesRef = particleSystem;
    return particleSystem;
  }

  updateParticles() {
    if (!this.particlesRef) {
      return;
    }
    const particles = this.particlesRef.geometry;
    for (let i = 0; i < particles.vertices.length; i++) {
      const particle = particles.vertices[i];
      particle.y += particle.velocity.y;
      if (particle.y < -1000) {
        particle.y = 1000;
        particle.velocity.y = -Math.random();
      }
    }
    particles.verticesNeedUpdate = true;
  }

  render() {
    useFrame(() => {
      this.updateParticles();
    });

    return this.createParticles;
  }
}

const MagicCanvas = () => {
  const containerRef = useRef(null);
  const fontURL = "https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json";
  const particleURL = "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png";
  // if (!font || !particle) {
  //   console.error('Missing font or particle prop in MagicCanvas component');
  //   return null;
  // }

  // if (!containerRef.current) {
  //   console.error('Missing containerRef in MagicCanvas component');
  //   return null;
  // }

  return (
    <div ref={containerRef}>
        <MagicEnvironment font={fontURL} particle={particleURL}  />
    </div>
  );
};

export default MagicCanvass;