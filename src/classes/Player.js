/**
 * Player class responsible for handling player animations and keyboard input.
 * Provides methods for player movement and state transitions.
 */
export class Player {
    /**
     * Constructor to initialize the player.
     * @param {Phaser.Scene} scene - The Phaser scene the player belongs to.
     * @param {number} x - The initial x-coordinate of the player.
     * @param {number} y - The initial y-coordinate of the player.
     */
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, 'idle');
        this.scene.add.existing(this.sprite);

        // Constants for player properties
        this.BOUNCE = 0.2;
        this.VELOCITY_X = 160;
        this.JUMP_VELOCITY = -350;
        this.FALL_VELOCITY = -400;

        this.initializePlayer();
    }

    /**
     * Configures player properties and animations.
     */
    initializePlayer() {
        // Configure physics properties
        this.sprite.setBounce(this.BOUNCE);
        this.sprite.setCollideWorldBounds(true);

        // Define animation configurations
        const animations = [
            { key: 'left', texture: 'run', frameRate: 10, repeat: -1 },
            { key: 'right', texture: 'run', frameRate: 10, repeat: -1 },
            { key: 'idle', texture: 'idle', repeat: -1 },
            { key: 'jump', texture: 'jump', repeat: -1 }
        ];

        // Create animations dynamically
        animations.forEach(({ key, texture, frameRate, repeat }) => {
            this.sprite.anims.create({
                key,
                frames: this.sprite.anims.generateFrameNumbers(texture),
                frameRate: frameRate || 10,
                repeat: repeat || -1
            });
        });
    }

    /**
     * Makes the player jump.
     */
    jump() {
        this.sprite.setVelocityY(this.JUMP_VELOCITY);
    }

    /**
     * Makes the player fall faster (e.g., for quick descent).
     */
    fall() {
        this.sprite.setVelocityY(this.FALL_VELOCITY);
    }

    /**
     * Sets the player to an idle state.
     */
    idle() {
        this.sprite.setVelocityX(0);
        this.sprite.anims.play('idle', true);
    }

    /**
     * Moves the player to the right and plays the running animation.
     */
    moveRight() {
        this.sprite.setVelocityX(this.VELOCITY_X);
        this.sprite.anims.play('right', true);
    }

    /**
     * Moves the player to the left and plays the running animation.
     */
    moveLeft() {
        this.sprite.setVelocityX(-this.VELOCITY_X);
        this.sprite.anims.play('left', true);
    }
}
