# Enabling Keyboard Inputs

### Instructions
Now that we have the basis of the game in place, we need to be able to move our character sprite. Luckily for us, Phaser offers a built-in keyboard manager. You will notice that there is an empty "update()" function at the bottom of the file. this is where we will add our keyboard input code. Also notice the usage of the following line of code: 

<img width="463" alt="Screenshot 2024-10-10 at 1 20 28 PM" src="https://github.com/user-attachments/assets/80416d75-b346-470c-a93c-379439db0148">



This creates a cursor object and populates it with up, down, left, and right object properties. 

1. Within the update() function, we need to add code to move the player horizontally.

<img width="884" alt="Screenshot 2024-10-10 at 1 21 13 PM" src="https://github.com/user-attachments/assets/effbe0d7-873e-4d30-9024-f7d4aa2529f3">


3. Next, we need to add code for when the character is stationary. Perhaps we could utilize the sprite animation that faces the user.

<img width="728" alt="Screenshot 2024-10-10 at 1 22 05 PM" src="https://github.com/user-attachments/assets/6cd6b395-d5dd-49ee-9b97-6d9641cd927b">

6. Now we need to be able to jump to reach the various platforms.

<img width="903" alt="Screenshot 2024-10-10 at 1 22 57 PM" src="https://github.com/user-attachments/assets/5b7b7d57-291c-4b12-908a-a430aadf53b8">





[<< Setup](./setup.md) | [Additional Features >>](./conclusion.md)
