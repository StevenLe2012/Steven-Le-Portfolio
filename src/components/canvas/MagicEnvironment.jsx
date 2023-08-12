import React from 'react';
import * as THREE from 'three';
import CreateParticles from './CreateParticles';

const MagicEnvironment = ({ font, particle }) => {
  const magicEnvironmentRef = React.useRef(null);

  React.useEffect(() => {
    const container = magicEnvironmentRef.current;
    const scene = new window.THREE.Scene();
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
    const camera = new window.THREE.PerspectiveCamera(65, container.clientWidth / container.clientHeight, 1, 10000);
    camera.position.set(0, 0, 100);
    return camera;
  };

  const createRenderer = (container) => {
    const renderer = new window.THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = window.THREE.sRGBEncoding;
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

export default MagicEnvironment;