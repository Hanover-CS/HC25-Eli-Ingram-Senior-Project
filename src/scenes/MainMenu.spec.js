import {describe, it, expect} from "vitest";
import {Boot} from "./Boot.js";
import {Preloader} from "./Preloader.js";
import {MainMenu} from "./MainMenu.js";
import {Level0} from "./Level0.js";
import {Game} from "./Game.js";
import {GameOver} from "./GameOver.js";

describe("MainMenu", () => {
    let game;
    let scene;

    beforeEach(async () => {
        const config = {
            type: Phaser.HEADLESS,
            width: 1024,
            height: 576,
            parent: 'game-container',
            backgroundColor: '#028af8',
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            scene: [
                MainMenu,
            ],
            render: {
                pixelArt : true
            },
            physics: {
                default: 'arcade'
            },
        };

        game = new Phaser.Game(config);
        //console.log(game.events.eventNames())
        await new Promise(resolve => {
            game.events.once('ready', () => {
                console.log('scene started');
                if (startedScene.key === 'MainMenu') {
                    scene = startedScene;
                    resolve(null);
                }
            })
        });

    });

    afterEach(() => {
        game.destroy(true);
    });

    it('it works', () => {
        expect(3+3).toBe(6);
    });
    it('has play button at x', () => {
        expect(scene.playButton.X).toBe(512);
    });
});

// Think about what kind of tests you want to write