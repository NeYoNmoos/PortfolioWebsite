import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

export default class ThreeText {
  constructor() {}

  getTextMesh(text, size, height, material, font) {
    let geometry = new TextGeometry(text, {
      font: font,
      size: size,
      height: height,
      curveSegments: 100,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 0
    })

    let textMesh = new THREE.Mesh(geometry, material)
    return textMesh
  }
}
