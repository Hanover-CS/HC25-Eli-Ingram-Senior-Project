import { Scene } from 'phaser';
import { Player } from '../classes/Player.js'

export class Level0 extends Scene
{
    constructor ()
    {
        super('Level0');
        console.log("Constructor");
    }
    preload () {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets/Levels/Level0');

        console.log("Preload")
        this.load.image('idleDoor', 'Idle_Door.png');
        this.load.image('terrain','Terrain (32x32).png');
        this.load.image('decor','Decorations (32x32).png');

        this.load.tilemapTiledJSON('level0', 'Level_0.0.json');
    }

    create ()
    {
        const map = this.make.tilemap({key: 'level0'})
        const tilesetDoor = map.addTilesetImage('k&p_door', 'idleDoor');
        const tilesetTerrain = map.addTilesetImage('k&p_tileset', 'terrain');
        const tilesetDecor = map.addTilesetImage('k&p_decor', 'decor');

        const layer = map.createLayer('Platforms', tilesetTerrain);
        //const doorLayer = map.createLayer('Object Layer 1', tilesetDoor)

        this.player = new Player(this, 50, 220);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.moveLeft();
        }
        if (this.cursors.right.isDown) {
            this.player.moveRight();
        }
        else {
            this.player.idle();
        }
        if (this.cursors.up.isDown && this.body.touching.down) {
            this.player.fall();
        }
    }

}
