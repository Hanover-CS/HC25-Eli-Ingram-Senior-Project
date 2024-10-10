# Enabling Keyboard Inputs

### Instructions
Now that we have the basis of the game in place, we need to be able to move our character sprite. Luckily for us, Phaser offers a built-in keyboard manager. You will notice that there is an empty "update()" function at the bottom of the file. this is where we will add our keyboard input code. Also notice the usage of the following line of code: <br>
<br>
cursors = this.input.keyboard.createCursorKeys();  <br>
<br>
This creates a cursor object and populates it with up, down, left, and right object properties. 

1. Within the update() function, we need to add code to move the player horizontally.
2. Next, we need to add code for when the character is stationary. Perhaps we could utilize the sprite animation that faces the user.
3. Now we need to be able to jump to reach the various platforms.




[<< Setup](./setup.md) | [Additional Features >>](./conclusion.md)
