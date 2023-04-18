import abc from '/abc.jpg'
// Set up the Three.js scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Create the slider background
const geometry = new THREE.PlaneGeometry(10, 1, 1)
const texture = new THREE.TextureLoader().load(abc)
const material = new THREE.MeshBasicMaterial({ map: texture })
const slider = new THREE.Mesh(geometry, material)
scene.add(slider)

// Create the slider handles
const handle1 = new THREE.Mesh(
  new THREE.SphereGeometry(0.2, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const handle2 = new THREE.Mesh(
  new THREE.SphereGeometry(0.2, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
handle1.position.set(-4, 0, 0)
handle2.position.set(4, 0, 0)
slider.add(handle1)
slider.add(handle2)

// Add event listeners to the slider handles
const dragControls = new THREE.DragControls([handle1, handle2], camera, renderer.domElement)
dragControls.addEventListener('drag', function () {
  // Use GSAP to animate the position of the slider handles
  gsap.to(handle1.position, { duration: 0.5, x: handle1.position.x })
  gsap.to(handle2.position, { duration: 0.5, x: handle2.position.x })
})

// Render the scene
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
