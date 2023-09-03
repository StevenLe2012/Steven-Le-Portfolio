import React from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

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

export default CreateParticles;