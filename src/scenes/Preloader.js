/**
 * Preloader class handles the loading of game assets and displays a loading bar.
 * Once assets are loaded, it transitions to the Main Menu scene.
 */
import { Scene } from 'phaser';

export class Preloader extends Scene {
    /**
     * Constructor to initialize the Preloader scene.
     */
    constructor() {
        super('Preloader');
    }

    /**
     * Initializes the loading screen with a background and a progress bar.
     * Sets up the loader's progress event to update the progress bar.
     */
    init() {
        // Display background image
        this.add.image(512, 384, 'background');

        // Add the outline of the progress bar
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        // Create the progress bar and position it
        const progressBar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

        // Update the progress bar width based on loading progress
        this.load.on('progress', (progress) => {
            progressBar.width = 4 + (460 * progress); // Update width relative to progress
        });
    }

    /**
     * Preloads the assets required for the game.
     */
    preload() {
        // Set the path for asset loading
        this.load.setPath('assets');

        // Load general assets
        this.load.image('background', 'bg.png');
        this.load.image('playButton', 'play_button.png');
        this.load.image('optionsButton', 'options_button.png');

        // Load player spritesheets
        this.load.spritesheet('idle', 'Kings and Pigs/Sprites/01-King Human/Idle (78x58).png', {
            frameWidth: 78,
            frameHeight: 58
        });
        this.load.spritesheet('run', 'Kings and Pigs/Sprites/01-King Human/Run (78x58).png', {
            frameWidth: 78,
            frameHeight: 58
        });
        this.load.spritesheet('jump', 'Kings and Pigs/Sprites/01-King Human/Jump (78x58).png', {
            frameWidth: 78,
            frameHeight: 58
        });
    }

    /**
     * Called after all assets have been loaded.
     * Sets up any global configurations or objects and transitions to the MainMenu.
     */
    create() {
        // Transition to the MainMenu scene
        this.scene.start('MainMenu');
    }
}
