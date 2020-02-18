var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xC0C0C0 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

camera.position.z = 5;

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );

const canvas = document.getElementById(`canvas`);
const renderer = new THREE.WebGLRenderer({canvas, antialias: false});

// var main = document.getElementById('main');
// document.body.appendChild( renderer.domElement );


var controls = new THREE.OrbitControls( camera, renderer.domElement );

// CUBE ANIMATION

// var geometry = new THREE.BoxGeometry();
// var material = new THREE.MeshLambertMaterial( {
// color:  0x0000FF,
// // transparent:true,
// // opacity:1,
// // wireframe:true
// } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 5.0);
// scene.add(ambientLight);

// function animate() {
//     requestAnimationFrame( animate );

//     controls.update();
//     // cube.rotation.x += 0.01;
//     // cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// animate();


// Instantiate a loader
var loader = new THREE.GLTFLoader();

// Load a glTF resource
loader.load(
	// resource URL
    // '/assets/ball/scene.gltf',
    '/assets/models/scene.gltf',
	// called when the resource is loaded
	function ( gltf ) {

        mesh = gltf.scene;
        mesh.scale.set( 10, 10, 10 );
        scene.add( mesh );
        
		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Scene
		gltf.scenes; // Array<THREE.Scene>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

// LIGHTS

var ambientLight = new THREE.AmbientLight( 0x404040, 50.0);
scene.add(ambientLight);

// var light = new THREE.PointLight(0xffffff,10.0,150);
// light.position.set( 50,50, 100 );
// scene.add(light);

var light = new THREE.DirectionalLight( 0xffffff, 20, 150 );
light.target = scene;
scene.add( light );

// var spotLight = new THREE.SpotLight( 0xffffff );
// spotLight.position.set( 100, 1000, 100 );
// scene.add( spotLight );

// var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// scene.add( light );


function render() {
    requestAnimationFrame( render ); 
    renderer.render(scene, camera); 
}

render();

const init = () => {
	window.addEventListener(`resize`, onWindowResize, false);
	onWindowResize();
};
const onWindowResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	// uniforms.iResolution.value.x = window.innerWidth;
	// uniforms.iResolution.value.y = window.innerHeight;
	renderer.setSize(window.innerWidth, window.innerHeight);
};


init();





