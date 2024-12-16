/**
 * Level0 class serves as a test level to implement and test basic functionalities.
 * Loads assets, sets up the game environment, and handles player interactions.
 */
import { Scene } from 'phaser';
import { Player } from '../classes/Player.js';

export class Level0 extends Scene {
    /**
     * Constructor to initialize the Level0 scene.
     */
    constructor() {
        super('Level0');
        console.log("Level0 Constructor Initialized");
    }

    /**
     Preloads assets required for this level.
     */
    preload() {
        // Set the path for assets specific to this level
        this.load.setPath('assets/Levels/Level0');

        console.log("Preloading Assets");
        // Load assets
        this.load.image('idleDoor', 'Idle_Door.png');
        this.load.image('terrain', 'Terrain (32x32).png');
        this.load.image('decor', 'Decorations (32x32).png');
        this.load.tilemapTiledJSON('level0', 'Level_0.0.json');
    }

    /**
     Creates the game world and sets up the player and environment.
     */
    create() {
        console.log("Creating Level0");

        // Load the tilemap and tilesets
        const map = this.make.tilemap({ key: 'level0' });
        const tilesetDoor = map.addTilesetImage('k&p_door', 'idleDoor');
        const tilesetTerrain = map.addTilesetImage('k&p_tileset', 'terrain');
        const tilesetDecor = map.addTilesetImage('k&p_decor', 'decor');

        // Create map layers
        map.createLayer('Platforms', tilesetTerrain);
        map.createLayer('Object Layer 1', tilesetDoor);

        // Initialize the player at the specified position
        this.player = new Player(this, 50, 220);

        // Create keyboard inputs
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    /**
     * Updates the game world each frame.
     * Handles player input and movement.
     */
    update() {
        // Handle player movement based on input
        if (this.cursors.left.isDown) {
            this.player.moveLeft();
        } else if (this.cursors.right.isDown) {
            this.player.moveRight();
        } else if (this.cursors.up.isDown) {
            this.player.jump(); // Player jumps
        } else {
            this.player.idle(); // Default state when no input is detected
        }
    }
}
