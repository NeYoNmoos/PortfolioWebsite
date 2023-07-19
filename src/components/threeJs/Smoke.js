import * as THREE from 'three'
import { gsap, TimelineMax } from 'gsap'

let worldCoords

export function setSmokeCoords(bodyMid) {
  bodyMid.geometry.computeBoundingBox()
  var boundingBox = bodyMid.geometry.boundingBox
  worldCoords = new THREE.Vector3()
  worldCoords.subVectors(boundingBox.max, boundingBox.min)
  worldCoords.multiplyScalar(0.5)
  worldCoords.add(boundingBox.min)
  worldCoords.applyMatrix4(bodyMid.matrixWorld)
}

export function dropSmoke(s) {
  s.mesh.material.opacity = 1
  s.mesh.position.x = worldCoords.x
  s.mesh.position.y = worldCoords.y
  s.mesh.position.z = worldCoords.z
  s.mesh.scale.set(0.1, 0.1, 0.1)

  var smokeTl = new TimelineMax()

  var tweenSmokeEnter = gsap.to(s.mesh.scale, Math.random() * 1 + 0.3, {
    x: Math.random() * 1 + 0.7,
    y: Math.random() * 1 + 0.7,
    z: Math.random() * 1 + 0.7,
    delay: 0.1,
    ease: Strong.easeOut
  })
  var tweenSmokeLeave = gsap.to(s.mesh.scale, 0.5, {
    x: 0.1,
    y: 0.1,
    z: 0.1,
    ease: Strong.easeIn,
    onComplete: resetSmoke,
    onCompleteParams: [s]
  })
  smokeTl.add(tweenSmokeEnter).add(tweenSmokeLeave, 0.6).play()
}

export function SmokeParticle() {
  this.geometry = new THREE.IcosahedronGeometry(75, 1)
  this.material = new THREE.MeshLambertMaterial({
    color: 'white',
    shading: THREE.FlatShading,
    transparent: true
  })
  return (this.mesh = new THREE.Mesh(this.geometry, this.material))
}
