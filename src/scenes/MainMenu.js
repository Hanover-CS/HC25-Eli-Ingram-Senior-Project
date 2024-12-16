/**
 * MainMenu class renders the main menu of the game.
 * Provides players with a landing screen and navigation to other scenes.
 */
import { Scene } from 'phaser';

export class MainMenu extends Scene {
    /**
     * Constructor to initialize the MainMenu scene.
     */
    constructor() {
        super('MainMenu');
    }

    /**
     * Creates the main menu interface with buttons for navigation.
     */
    create() {
        // Add the background image
        this.add.image(512, 384, 'background');

        // Add the Play button
        this.playButton = this.add.image(512, 275, 'playButton');
        this.addInteractiveButton(this.playButton, 'Level0');

        // Add the Options button
        this.optionsButton = this.add.image(512, 375, 'optionsButton');
        this.addInteractiveButton(this.optionsButton, 'Options');
    }

    /**
     * Makes a button interactive and binds it to transition to another scene.
     * @param {Phaser.GameObjects.Image} button - The button to make interactive.
     * @param {string} targetScene - The scene to transition to on button click.
     */
    addInteractiveButton(button, targetScene) {
        button.setInteractive();
        button.once('pointerdown', () => {
            this.scene.start(targetScene);
        });
    }
}
