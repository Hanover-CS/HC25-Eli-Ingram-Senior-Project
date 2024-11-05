import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        let playButton = this.add.image(512, 275, 'playButton');

        let optionsButton = this.add.image(512, 375, 'optionsButton');

        playButton.setInteractive();
        playButton.once('pointerdown', () => {
            this.scene.start('Game');
        })

        optionsButton.setInteractive();
        optionsButton.once('pointerdown', () => {
            this.scene.start('Options');
        })
    }
}
