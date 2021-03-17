
class Store {

    constructor(scene) {
        this.scene = scene
    }

    SpawnStore() {
        console.log("asd")
        const geometry = new THREE.BoxBufferGeometry( 10, 10, 1 );
        const loader = new THREE.TextureLoader();
  
        const material = new THREE.MeshBasicMaterial({
          map: loader.load("img/wallpaper.png"),
            });
        //const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.y = 10;
        cube.position.z = -20;
        this.scene.add( cube );
    }

    AddTexture() {
        const texture = new THREE.TextureLoader().load( "textures/water.jpg" );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 4, 4 );
    }
}
