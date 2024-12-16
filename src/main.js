/**
 * Main configuration file for the Phaser game.
 * Defines game dimensions, scenes, physics settings, and rendering options.
 */

// Import all scenes
import { Boot } from './scenes/Boot.js';
import { Preloader } from './scenes/Preloader.js';
import { MainMenu } from './scenes/MainMenu.js';
import { Level0 } from './scenes/Level0.js';
import { Game } from './scenes/Game.js';
import { GameOver } from './scenes/GameOver.js';

// Phaser game configuration
const config = {
    type: Phaser.AUTO, // Automatically select WebGL or Canvas based on browser support
    width: 1024, // Game width in pixels
    height: 576, // Game height in pixels
    parent: 'game-container', // HTML element ID to contain the game
    backgroundColor: '#028af8', // Background color of the game canvas

    // Scale settings to ensure the game fits the screen
    scale: {
        mode: Phaser.Scale.FIT, // Scales the game while maintaining aspect ratio
        autoCenter: Phaser.Scale.CENTER_BOTH // Centers the game in the browser
    },

    // Scenes used in the game
    scene: [
        Boot,       // Initial scene for setting up assets
        Preloader,  // Scene for preloading assets
        MainMenu,   // Main menu scene
        Level0,     // First game level (test level)
        Game,       // Main gameplay scene
        GameOver    // Game over scene
    ],

    // Render settings
    render: {
        pixelArt: true // Ensures pixel art is rendered cleanly
    },

    // Physics engine configuration
    physics: {
        default: 'arcade', // Arcade physics for simple 2D interactions
    }
};

// Export and initialize the Phaser game
export default new Phaser.Game(config);
