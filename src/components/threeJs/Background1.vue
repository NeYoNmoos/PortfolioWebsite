<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import ThreeText from './ThreeText'
import { TextureLoader } from 'three'
import Rocket from './Rocket1.js'
import { setSmokeCoords, dropSmoke } from './Smoke.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const mount = ref()
let camera
let renderer
let scrollY = undefined as any
let title
let subTitle
let duck

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
  loader.load('/fonts/helvetiker_regular.typeface.json', function (loadedFont) {
    let textMaker = new ThreeText()

    let material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 })
    title = textMaker.getTextMesh("Hello I'm Matthias", 4, 0.1, material, loadedFont)
    title.position.set(-21, 0, 0)
    title.rotation.set(-Math.PI / 15, 0, 0)

    subTitle = textMaker.getTextMesh('JS-Engineer', 2, 0.1, material, loadedFont)
    subTitle.position.set(-7, -4, 0)
    subTitle.rotation.set(-Math.PI / 15, 0, 0)

    scene.add(title)
    scene.add(subTitle)
  })

  window.addEventListener('resize', onWindowResize, false)

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('scroll', handleScroll)

  const geometry = new THREE.DodecahedronGeometry(10, 0)
  const edges = new THREE.EdgesGeometry(geometry)
  const material = new THREE.LineBasicMaterial({ color: 0xde0404 })
  const cube = new THREE.LineSegments(edges, material)
  scene.add(cube)

  const profileLoader = new TextureLoader()
  const profileTexture = profileLoader.load('/icons/profile_picture.jpeg')
  const profileMaterial = new THREE.MeshBasicMaterial({
    map: profileTexture,
    transparent: true,
    opacity: 0
  })
  const profileGeometry = new THREE.BoxGeometry(10, 10, 0.5)
  const profileCube = new THREE.Mesh(profileGeometry, profileMaterial)
  profileCube.position.x = 25
  profileCube.position.z = 50
  profileCube.position.y = -2
  profileCube.rotateY(-0.5)
  scene.add(profileCube)

  // Create border
  const borderMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0
  })
  const borderGeometry = new THREE.BoxGeometry(10.2, 10.2, 0.6)
  const borderCube = new THREE.Mesh(borderGeometry, borderMaterial)
  borderCube.position.x = 25
  borderCube.position.z = 50
  borderCube.position.y = -2
  borderCube.rotateY(-0.5)
  scene.add(borderCube)

  let gltfLoader = new GLTFLoader()

  gltfLoader.load(
    '/three/DuckRubberHat.gltf',
    function (gltf) {
      console.log(gltf)

      gltf.scene.position.set(-20, -5, 100)
      gltf.scene.rotateY(1)
      gltf.scene.scale.set(3, 3, 3)
      duck = gltf.scene
      scene.add(gltf.scene)
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )

  // helpers for testing
  // const controls = new OrbitControls(camera, renderer.domElement)
  // const gridHelper = new THREE.GridHelper(200, 50)
  // scene.add(gridHelper)

  const cubes: THREE.LineSegments[] = []

  function generateCube(minRadius, maxRadius) {
    const w1 = THREE.MathUtils.randFloat(1, 5)
    const h1 = THREE.MathUtils.randFloat(1, 5)
    const w2 = THREE.MathUtils.randFloat(1, 5)
    const h2 = THREE.MathUtils.randFloat(1, 5)

    const geometry = new THREE.BoxGeometry(w1, h1, w2, h2)
    const edges = new THREE.EdgesGeometry(geometry)
    const material = new THREE.LineBasicMaterial({ color: 0xffffff })
    const cube = new THREE.LineSegments(edges, material)

    // const minRadius = 0 // minimum distance from origin
    // const maxRadius = 75 // maximum distance from origin

    // Try until we find a point in the range [minRadius, maxRadius]
    let x: number, y: number, z: number, r: number
    do {
      x = THREE.MathUtils.randFloatSpread(maxRadius)
      y = THREE.MathUtils.randFloatSpread(maxRadius)
      z = THREE.MathUtils.randFloatSpread(maxRadius)
      r = Math.sqrt(x * x + y * y + z * z)
    } while (r < minRadius || r > maxRadius)

    // Normalize coordinates to lie on the sphere
    x *= maxRadius / r
    y *= maxRadius / r
    z *= maxRadius / r

    cube.position.set(x, y, z)
    scene.add(cube)

    cubes.push(cube)
  }

  // Array(200).fill(0, 100).forEach(generateCube)
  for (let i = 0; i < 275; i++) {
    if (i <= 25) {
      generateCube(0, 25)
    } else if (i <= 50) {
      generateCube(0, 50)
    } else {
      generateCube(0, 75)
    }
  }

  let spheres: THREE.Mesh[] = []
  let lights: THREE.PointLight[] = []

  function generateSphere() {
    const radius = THREE.MathUtils.randFloat(0.1, 1)
    const geometry = new THREE.SphereGeometry(radius, 32, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const sphere = new THREE.Mesh(geometry, material)

    const r = THREE.MathUtils.randFloat(80, 200) // random distance from origin
    const theta = THREE.MathUtils.randFloat(0, 2 * Math.PI) // random azimuthal angle
    const phi = Math.acos(2 * Math.random() - 1) // random polar angle

    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    sphere.position.set(x, y, z)
    scene.add(sphere)

    // Create a point light at the same position
    const light = new THREE.PointLight(0xffffff, 1, 50)
    light.intensity = 5
    light.position.set(x, y, z)
    scene.add(light)

    spheres.push(sphere)
    lights.push(light)
  }

  Array(100).fill(0).forEach(generateSphere)

  const light = new THREE.PointLight(0xffffff, 1, 100)
  light.position.set(0, 200, 200)
  light.intensity = 5
  light.decay = 0
  scene.add(light)

  let rocket = new Rocket().rocket
  rocket.scale.set(0.1, 0.1, 0.1)
  rocket.position.z = 130
  rocket.position.x = 30
  scene.add(rocket)

  // Set initial target color
  let targetColor = new THREE.Color()
  targetColor.setHSL(1, 1, 0.5)
  // Set speed for color transition
  let transitionSpeed = 0.05

  function handleScroll() {
    if (window) {
      // camera movement
      let maxScrollTop = document.documentElement.scrollHeight - window.innerHeight
      let scrollPercent = window.scrollY / maxScrollTop

      scrollY = scrollPercent
      camera.position.z = 30 + scrollPercent * 200

      camera.lookAt(scene.position)

      // cube color change
      let hue = (window.scrollY % 360) / 360
      targetColor.setHSL(hue, 1, 0.5)

      let startFade = 0.1007049345
      let endFade = 0.2517623364
      if (title && subTitle) {
        if (scrollY >= endFade) {
          title.material.opacity = 0
          subTitle.material.opacity = 0
        } else if (scrollY > startFade) {
          let opacity = 1 - (scrollY - startFade) / (endFade - startFade)
          title.material.opacity = opacity
          subTitle.material.opacity = opacity
        }
      }

      let startFadeIn = 0.1510574018
      let fullyVisible = 0.2517623364
      let startFadeOut = 0.3021148036
      let fullyInvisible = 0.3776435045

      if (scrollY < startFadeIn) {
        profileCube.material.opacity = 0
      } else if (scrollY < fullyVisible) {
        let progress = (scrollY - startFadeIn) / (fullyVisible - startFadeIn)
        profileCube.material.opacity = progress
        borderCube.material.opacity = progress
      } else if (scrollY < startFadeOut) {
        profileCube.material.opacity = 1
        borderCube.material.opacity = 1
      } else if (scrollY < fullyInvisible) {
        let progress = 1 - (scrollY - startFadeOut) / (fullyInvisible - startFadeOut)
        profileCube.material.opacity = progress
        borderCube.material.opacity = progress
      } else {
        profileCube.material.opacity = 0
        borderCube.material.opacity = 0
      }

      // console.log(scrollY)
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

    rocket.rotation.y += 0.02
    if (duck) {
      duck.rotation.y += 0.02
    }
    // setSmokeCoords(rocket)
    // dropSmoke(mySmokeObject)

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
