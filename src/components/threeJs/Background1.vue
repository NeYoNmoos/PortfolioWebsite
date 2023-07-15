<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import ThreeText from './ThreeText'

const mount = ref()
let camera
let renderer
let scrollY = undefined as any
let title
let subTitle

onMounted(async () => {
  window.addEventListener('resize', onWindowResize, false)

  const scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  camera.position.z = 30

  // making text
  let loader = new FontLoader()
  loader.load('/src/assets/fonts/helvetiker_regular.typeface.json', function (loadedFont) {
    let textMaker = new ThreeText()

    let material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 }) // White color
    title = textMaker.getTextMesh("Hello I'm Matthias", 4, 0.1, material, loadedFont)
    title.position.set(-21, 0, 0)
    title.rotation.set(-Math.PI / 15, 0, 0)

    subTitle = textMaker.getTextMesh('JS-Engineer', 2, 0.1, material, loadedFont)
    subTitle.position.set(-7, -4, 0)
    subTitle.rotation.set(-Math.PI / 15, 0, 0)

    scene.add(title)
    scene.add(subTitle)
  })

  window.addEventListener('scroll', handleScroll)

  const geometry = new THREE.DodecahedronGeometry(10, 0)
  const edges = new THREE.EdgesGeometry(geometry)
  const material = new THREE.LineBasicMaterial({ color: 0xde0404 })
  const cube = new THREE.LineSegments(edges, material)
  scene.add(cube)

  // helpers for testing
  // const controls = new OrbitControls(camera, renderer.domElement)
  // const gridHelper = new THREE.GridHelper(200, 50)
  // scene.add(gridHelper)

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

  // Set initial target color
  let targetColor = new THREE.Color()
  targetColor.setHSL(1, 1, 0.5)
  // Set speed for color transition
  let transitionSpeed = 0.05

  function handleScroll() {
    if (window) {
      // camera movement
      scrollY = window.scrollY
      camera.position.z = 30 + scrollY * 0.05

      // cube color change
      let hue = (scrollY % 360) / 360
      targetColor.setHSL(hue, 1, 0.5)
      console.log(scrollY)

      let startFade = 400
      let endFade = 1000
      if (scrollY >= endFade) {
        title.material.opacity = 0
        subTitle.material.opacity = 0
      } else if (scrollY > startFade) {
        let opacity = 1 - (scrollY - startFade) / (endFade - startFade)
        title.material.opacity = opacity
        subTitle.material.opacity = opacity
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.material.color.lerp(targetColor, transitionSpeed)

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
