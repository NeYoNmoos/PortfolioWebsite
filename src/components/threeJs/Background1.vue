<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const mount = ref()
let camera
let renderer
let scrollY = undefined as any

onMounted(() => {
  window.addEventListener('resize', onWindowResize, false)

  const scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  camera.position.z = 30

  function handleScroll() {
    if (window) {
      scrollY = window.scrollY
      camera.position.z = 30 + scrollY * 0.05
    }
  }

  window.addEventListener('scroll', handleScroll)

  const geometry = new THREE.BoxGeometry(10, 10, 10, 10)
  const edges = new THREE.EdgesGeometry(geometry)
  const material = new THREE.LineBasicMaterial({ color: 0xde0404 })
  const cube = new THREE.LineSegments(edges, material)
  scene.add(cube)

  // const gridHelper = new THREE.GridHelper(200, 50)
  // scene.add(gridHelper)

  // const controls = new OrbitControls(camera, renderer.domElement)

  const cubes: THREE.LineSegments[] = []

  function generateCube() {
    const w1 = THREE.MathUtils.randFloat(1, 5)
    const h1 = THREE.MathUtils.randFloat(1, 5)
    const w2 = THREE.MathUtils.randFloat(1, 5)
    const h2 = THREE.MathUtils.randFloat(1, 5)

    const geometry = new THREE.BoxGeometry(w1, h1, w2, h2)
    const edges = new THREE.EdgesGeometry(geometry)
    const material = new THREE.LineBasicMaterial({ color: 0xffffff })
    const cube = new THREE.LineSegments(edges, material)

    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(100))

    cube.position.set(x, y, z)
    scene.add(cube)

    cubes.push(cube)
  }

  Array(200).fill(0).forEach(generateCube)

  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    cubes.forEach((cube) => {
      cube.rotation.x += 0.002
      cube.rotation.y += 0.002
      cube.rotation.z += 0.002
    })

    // controls.update()

    renderer.render(scene, camera)
  }

  renderer.setSize(window.innerWidth, window.innerHeight)
  mount.value?.appendChild(renderer.domElement)
  animate()
})

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize, false)
})
</script>

<template>
  <div id="mount" ref="mount"></div>
</template>

<style scoped>
#mount {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
