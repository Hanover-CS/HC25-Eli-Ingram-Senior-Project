import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background').setDepth(0);

        let playButton = this.add.image(512, 275, 'playButton').setDepth(1);

        let optionsButton = this.add.image(512, 375, 'optionsButton').setDepth(1);

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
