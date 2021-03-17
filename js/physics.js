/*

OIMO physics 
https://github.com/lo-th/Oimo.js/

*/


class Physics {
    constructor(human) {
        this.world = new OIMO.World({ 
            timestep: 1/60, 
            iterations: 8, 
            broadphase: 2, // 1 brute force, 2 sweep and prune, 3 volume tree
            worldscale: 1, // scale full world 
            random: true,  // randomize sample
            info: false,   // calculate statistic or not
            gravity: [0,-9.8,0] 
        });


        this.man = human
        this.initHuman()
    }

    initHuman() {
        this.player = this.world.add({ 
            type:'sphere', // type of shape : sphere, box, cylinder 
            size:[1,1,1], // size of shape
            pos:[0,10,0], // start position
            rot:[0,0,0], // start rotation in degree
            move:true, // dynamic or statique
            density: 1,
            friction: 0.2,
            restitution: 0.2,
            belongsTo: 1, // The bits of the collision groups to which the shape belongs.
            collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
        })
    }

    addStaticCube(cube) {
        var body = this.world.add({ 
            type:'box', // type of shape : sphere, box, cylinder 
            size:[1,1,1], // size of shape
            pos:[0,0,0], // start position in degree
            rot:[0,0,90], // start rotation in degree
            move:false, // dynamic or statique
            density: 1,
            friction: 0.2,
            restitution: 0.2,
            belongsTo: 1, // The bits of the collision groups to which the shape belongs.
            collidesWith: 0xffffffff // The bits of the collision groups with which the shape collides.
        })
    }

    update(camera) {
        this.world.step()
        camera.position.copy( this.player.getPosition() )
        //camera.quaternion.copy( this.player.getQuaternion() )
    }

}