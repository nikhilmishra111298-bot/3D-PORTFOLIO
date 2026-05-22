import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.querySelector("#bg");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x00ffff, 80);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

let model;

const loader = new GLTFLoader();

loader.load(
  "assets/models/developer.glb",
  function (gltf) {
    model = gltf.scene;
    model.scale.set(1.8, 1.8, 1.8);
    model.position.set(2.5, -1.2, 0);
    scene.add(model);
  },
  undefined,
  function () {
    console.log("3D model not found. Showing fallback shape.");

    const geometry = new THREE.IcosahedronGeometry(1.8, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      wireframe: true,
    });

    model = new THREE.Mesh(geometry, material);
    model.position.x = 2.5;
    scene.add(model);
  }
);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1200;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 20;
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.015,
  color: 0xffffff,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX / window.innerWidth - 0.5;
  mouseY = event.clientY / window.innerHeight - 0.5;
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);

  if (model) {
    model.rotation.y += 0.006;
  }

  particles.rotation.y += 0.0008;

  camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
  camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

animate();