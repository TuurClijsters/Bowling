var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xff0000 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

// camera.position.z = -501; 
// camera.position.y = 15; 


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera, renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    controls.update();
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();



var loader = new THREE.GLTFLoader();

var ship_material = new THREE.MeshBasicMaterial( { color: 0x444444 } );

loader.load(
    // resource URL
    '/assets/models/scene.gltf',
    // called when the resource is loaded

    
    function ( gltf ) {

            var cube = new THREE.Mesh( geometry, material );

            mesh = gltf.scene;
            
            mesh.scale.set( 10, 10, 10 );
            scene.add( mesh );


            // gltf.traverse( function( child ) {
            //     if ( child instanceof THREE.Mesh ) {
            //         child.material = ship_material;
            //     }
            // } );
            // scene.add( gltf );

            //scene.add( gltf.scene );

            // gltf.animations; // Array<THREE.AnimationClip>
            // gltf.scene; // THREE.Scene
            // gltf.scenes; // Array<THREE.Scene>
            // gltf.cameras; // Array<THREE.Camera>
            // gltf.asset; // Object

    },
    // called when loading is in progresses
    function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

            console.log( 'An error happened' );

    }
);

function render() {
    requestAnimationFrame( render ); 
    renderer.render(scene, camera); 
}

render();





