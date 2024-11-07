export class Player  {
    constructor(scene, x, y){
        this.scene = scene;
        console.log(scene.physics)
        this.sprite = scene.physics.add.sprite(x, y, 'idle'); // The frame is optional
        this.scene.add.existing(this.sprite);
        this.create();
    }

    create() {
       this.sprite.setBounce(0.2);
       this.sprite.setCollideWorldBounds(true);

        this.sprite.anims.create({
            key: 'left',
            frames: this.sprite.anims.generateFrameNumbers('run'),
            frameRate: 10,
            repeat: -1,
        });

        this.sprite.anims.create({
            key: 'right',
            frames: this.sprite.anims.generateFrameNumbers('run'),
            frameRate: 10,
            repeat: -1,
        });

        this.sprite.anims.create({
            key: 'idle',
            frames: this.sprite.anims.generateFrameNumbers('idle'),
            repeat: -1,
        })
    }

    fall() {
        this.sprite.setVelocityX(-330)
    }

    idle() {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play('idle');
    }

    moveRight() {
        this.sprite.setVelocityX(160);
        this.sprite.anims.play('right');
    }

    moveLeft() {
        this.sprite.setVelocityX(-160);
        this.sprite.anims.play('left');
    }
}