# Konnect

Konnect is a word game where the computer selects a random word and you have to guess the word in the least amount of lifelines. If you get a letter right in the right position of your guess it will turn green, orange shows the letter is right but in the wrong position and red show the letter doesn't belong in the game. This the link to the live version of the game (https://firefox35.github.io/konnect/)

![Mockups](assets/images/newdevices.png)

## Features

### Site Wide

Header

- Displays the Logo and the name of the brand to promote the game.

  ![Konnect](assets/images/konnect-header.PNG)

Navigation Menu

- The navigation is very simple to the game, once you enter your name into the input field and click submit you will be able to enter the game.
- In the game screen there is both a house and restart button that will bring you back to the Introduction Screen.

Footer

- Displays a message to visit us on Facebook

  ![konnect](assets/images/konnect-footer.PNG)

404 Error

- Broken link to page.
- Error due favicon not working.

  ![Error 404](assets/images/Error404.PNG)

### About Screen

- About Screen Image

  - The user is shown with an introduction of electricity flowing through the screen needed to be Konnect to the game.

- About Screen Description

  - The user is shown a screen with general rules of the game and where to enter the person and submit to enter the game.

    ![About Screen](assets/images/startScreen.PNG)

### Main Game Screen

- Game Screen Image

  - The user is shown with an image of a electrician coming to Konnect to the game as the electricity flows through the game.

- Game Screen Description

  - The user is displayed with the game as per the game rules shown in the about screen.

    ![Game Screen](assets/images/gamescreen.PNG)

## Extra Features

Local Storage

- The user enter there name and click submit will be then stored in Local Storage.
- If you winner the game it will display the users has won with there name attached.

## Future Implementation

Due to time Constraints the following are required.

- It requires a display message that you have lost the game.
- I need to create a restart/reset to the game, this is currently been redirected to the Introduction Screen.
- Implement a Leader board.

## Design

Wireframes - Unizard.io

- About Screen

  ![About Screen](assets/images/screen1.jpeg)

- Main Game Screen

  ![About Screen](assets/images/screen2.jpeg)

  ![About Screen](assets/images/screen3.jpeg)

  ![About Screen](assets/images/screen4.jpeg)

  ![About Screen](assets/images/screen5.jpeg)

## Technologies

HTML

- Hypertext Markup Language is the main language to create the structure of the website.

CSS

- Cascading Style Sheets is used to style your content in an external file.

JavaScript

- Object Oriented programming language that interacts with the web browser.

Github

- This is used to create and store your source code as a backup if you lose your application.
- <https://github.com/firefox35/konnect>

Git

- Git is the language used to submit your source code to the repository.

CodeAnyWhere

- Is the application where you create your website in file structures.

Uizard.io

- This application was used to create mockups for the konnect website.
- <https://app.uizard.io>
- <https://app.uizard.io/prototypes/bMqxdZoEyxTYJrG9RKqP>

Website Mockup Generator

- This application was used to create images of the konnect website in desktop, laptop, tablet and mobile devices.
- <https://websitemockupgenerator.com>

Resize images

- This application was used to resize images of the konnect website in desktop, laptop, tablet and mobile devices.
- https://www.resizepixel.com/

Navigation

Introduction Screen

- Submit Button : Once you fill out your first name and click the button it will bring you to the game screen.

Game Screen

- Home Button : Will bring you back to the Introduction Screen.
- Play Again : Currently will bring you back to the Introduction Screen. (This is a work in progress due to time constraints).

## Testing

Responsiveness

Responsiveness was tested on screen sizes from 320px on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [Konnect](https://firefox35.github.io/konnect/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

No issues regards with overlapping, images and links

Result:

No issue to report.

Accessibility

The following criteria were met for testing.

- All navigation links accessibility
- Text or titles descriptions are visible.
- Heading level are not missed.
- HTML page attribute has been set.

Manual testing performed as expected and accessible.

### Lighthouse Testing

Konnect Screens
![Both Screens](assets/images/Lighthouse-test.PNG)

Functional Testing

Navigation Links

- Perform testing was carried out on all navigation links and found to be working perfectly by way of clicking each buttons.

| Navigation   | Page to Load |
| ------------ | ------------ |
| About Screen | index.html   |
| Main Screen  | index.html   |

\*Game Testing

-The game was tested to ensure its functionality was correctly working.
-The following test scenarios were covered.

Test 1

- Store Name in Local Storage. - [Konnect](https://firefox35.github.io/konnect/)

  Steps to Test:

        1. Display of Introduction Screen
        2. Enter name in input field
        3. The input field shows the name.
        4. Click Submit.
        5. The user is redirected to the Game Screen
        6. The name is stored in local storage,

  Expected:

        To submit name into local storage.

  Result:

        No errors and worked as expected.

Test 2

- Navigate to Game Screen - [Konnect](https://firefox35.github.io/konnect/)

  Steps to Test:

        1. Display of Introduction Screen
        2. Enter name in input field
        3. The input field shows the name.
        4. Click Submit.
        5. The user is redirected to the Game Screen

  Expected:

        Enter into Game Screen.

  Result:

        No errors and worked as expected.

Test 3

- User guess word submitted - [Konnect](https://firefox35.github.io/konnect/)

  Steps to Test:

        1. In the game screen.
        2. Enter guess word into the input field.
        3. Click submit.
        4. Displays on output boxes.

  Expected:

        Word should display in output boxes.

  Result:

        No errors and worked as expected.

Test 4

- User guess word clears when submitted - [Konnect](https://firefox35.github.io/konnect/)

  Steps to Test:

        1. In the game screen.
        2. Enter guess word into the input field.
        3. Click submit.
        4. Displays on output boxes.
        5. Input field is empty.

  Expected:

        Input field to become clear for next guess.

  Result:

        No errors and worked as expected.

Test 5

- The user is shown the result of the guess - [Konnect](https://firefox35.github.io/konnect/)

  Steps to Test:

        1. In the game screen.
        2. Enter guess word into the input field.
        3. Click submit.
        4. Displays the result from the output boxes.

  Expected:

        Shows the result from the guess.

  Result:

        No errors and worked as expected.

Test 6

- The result shows the right color scheme - [Konnect](https://firefox35.github.io/konnect/)

  Steps to Test:

        1. In the game screen.
        2. Enter guess word into the input field.
        3. Click submit.
        4. A result is displayed on the output boxes.
        5. Result shows colors of the user guess.

  Expected:

    Display the color scheme in the output.

  Result:

    No errors and worked as expected.


Test 7

- Random word remains static during guessing the right answer - [Konnect](https://firefox35.github.io/konnect/)

  Steps to Test:

        1. In the game screen.
        2. Enter guess word into the input field.
        3. Click submit.
        4. A result is displayed on the output boxes.
        5. Enter your next guess
        6. Click submit.
        7. Display the same random word again.
        8. Process is done a number of time till the user guesses the right word.

  Expected:

    The random word stays static during the game.

  Result:

     No errors and worked as expected.

Test 8

Input field can only input a string value - [Konnect](https://firefox35.github.io/konnect/)

    Steps to Test:

        1. In the game screen.
        2. Enter numbers into the input field.
        3. Click submit.

    Expected:

        Rejects the integer value.

    Result:

        No errors and worked as expected.

Test 9

The displays the result of the winner - [Konnect](https://firefox35.github.io/konnect/)

    Steps to Test:

        1. In the game screen.
        2. Enter guess word into the input field.
        3. Click submit.
        4. Repeat Process till the right answer.

    Expected:

        Display the result of the winner.

    Result:

        No errors and worked as expected.

Test 10

Input field can only input a string value - [Konnect](https://firefox35.github.io/konnect/)

    Steps to Test:

        1. In the game screen.
        2. Enter numbers into the input field.
        3. Click submit.

    Expected:

        Rejects the integer value.

    Result:

        No errors and worked as expected.

Test 11
Home Button on Game Screen - [Konnect](https://firefox35.github.io/konnect/)

    Steps to Test:

        1. In the game screen.
        2. Click on Home button.

    Expected:

        Return to the Introduction Screen.

    Result:

        No errors and worked as expected.

Test 12

Play Again Button on Game Screen - [Konnect](https://firefox35.github.io/konnect/)

    Steps to Test:

        1. In the game screen.
        2. Click on the Play Again button.

    Expected:

        Restart the game again.

    Result:

        Due to time constraints the result is that the button returns you to the introduction screen but you can still play the game again.

Test 12

Play Again Button on Game Screen - [Konnect](https://firefox35.github.io/konnect/)

    Steps to Test:

        1. In the game screen.
        2. Click on the Play Again button.

    Expected:

        Restarts the game again.

    Result:

        Due to time constraints the result is that the button returns you to the introduction screen but you can still play the game again.

- Header Icons/Links

  - Logo Image

    - https://fontawesome.com/icons/arrows-rotate?f=classic&s=solid

  - Electricity Image

    - https://www.vox.com/2016/9/19/12938086/electrify-everything

  - Know the Rule Image

    - https://www.hubpng.com/photo/63875/rules-and-regulations-icon-clipart-png-follow

  - Stickman Image

    - https://www.facebook.com/ElectricConnectionsAntigua/
    - https://www.presentermedia.com/powerpoint-animation/electrician-plug-it-in-anim-pid-8021

  - Play Again Image

    - https://www.vectorstock.com/royalty-free-vector/play-again-round-button-vector-4178103

  - Home Icon Image
    - https://icon-library.com/images/home-icon-for-website/home-icon-for-website-12.jpg

Validation Testing

- HTML

  - index.html

    ![Konnect Screens](assets/images/HTML-Validation.PNG)

- CSS

  - style.css

    ![Konnect Screens](assets/images/konnect-ccs-validation.PNG)

- JAVASCRIPT

  - script.js

  ![konnect Screens](assets/images/javascript-validation.PNG)

Unfixed Bugs

- Responsiveness of the website worked on all devices and screen sizes

## Deployment

Version Control

Deployment of Live Version from Github

- The website was created using CodeAnyWhere editor and the code was pushed to a repository in GitHub called Konnect.

- I used the following GitHub commands to push the code to the repository, every time a chance is made to the code. This is what they called version control. Its basically a backup version of your code if anything goes wrong.
- git add <file> - This command is basically saving your code
- git commit -m "Commit Message"
- git push

The live link can be found here - <https://firefox35.github.io/konnect/>

Clone the Repository Code Locally

- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the menu on left select 'Pages'
- From the source section drop-down menu, select the Branch: main
- Click 'Save'
- A live link will be displayed in a green banner when published successfully.

The live link can be found here - <https://firefox35.github.io/konnect/>

Credits

- Links to Images and Content used in the game.

  - Logo Image

    - https://fontawesome.com/icons/arrows-rotate?f=classic&s=solid

  - Electricity Image

    - https://www.vox.com/2016/9/19/12938086/electrify-everything

  - Know the Rule Image

    - https://www.hubpng.com/photo/63875/rules-and-regulations-icon-clipart-png-follow

  - Stickman Image

    - https://www.facebook.com/ElectricConnectionsAntigua/
    - https://www.presentermedia.com/powerpoint-animation/electrician-plug-it-in-anim-pid-8021

  - Play Again Image

    - https://www.vectorstock.com/royalty-free-vector/play-again-round-button-vector-4178103

  - Home Icon Image
    - https://icon-library.com/images/home-icon-for-website/home-icon-for-website-12.jpg

- Learning Material

- Videos

  - Use JavaScript to Get Value from a textbox and display on the page.

    - https://www.youtube.com/watch?v=aEj0Wu33hJM

  - Compare Elements of Two Arrays Using for Loop.

    - https://www.youtube.com/watch?v=On9dzBcNWJk

  - Compare Two Arrays in JavaScript

    - https://www.youtube.com/watch?v=xxDqhU-0mek

  - How to insert text with button click

    - https://www.youtube.com/watch?v=yZwYuDgfnY4

  - Saving User Input in JavaScript

    - https://www.youtube.com/watch?v=96hV2FTg1dU

  - Compare Objects and Arrays

    - https://www.youtube.com/watch?v=tx19kr_jfO8

  - Compare two strings using True or False

    - https://www.youtube.com/watch?v=zJ7LWiRxxFQ

  - How to Make input text allow only letters backspace and delete in js
    - https://www.youtube.com/watch?v=P6bmRQKwxSk

- Websites

  Stack Over Flow

  - https://stackoverflow.com/questions/70648133/get-array-data-into-input-fields
  - https://stackoverflow.com/questions/2173229/how-do-i-write-a-rgb-color-value-in-javascript
  - https://stackoverflow.com/questions/62975985/change-text-color-using-if-else-in-javascript
  - https://stackoverflow.com/questions/13628159/split-a-string-into-two-text-boxes

  Treehouse

  - https://teamtreehouse.com/community/how-to-create-life-counter

  Tutorialspoint

  - https://www.tutorialspoint.com/How-to-limit-the-number-of-characters-allowed-in-form-input-text-field#:~:text=To%20set%20the%20maximum%20character,use%20minlength%20attribute.

  Ceos3c.com

  - https://www.ceos3c.com/javascript/store-user-input-in-a-variable-with-javascript/

  Codingbeautydev.com

  - https://codingbeautydev.com/blog/javascript-get-first-character-of-string/

  Developer.mozilla.org

  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

  Google.com

  - https://www.google.com/search?rlz=1C1CHBF_enIE1013IE1013&sxsrf=APwXEdfryJ2_ypKt_n4JQstvdsVzFDShAA:1687622045414&q=save+user+input+from+one+function+to+another+javascript&tbm=vid&sa=X&ved=2ahUKEwiGuqCEotz_AhVGhlwKHYU4Bq0Q0pQJegQIChAB&biw=1360&bih=657&dpr=1#fpstate=ive&vld=cid:b4a90358,vid:7LGpIQ6ceJs

  Freecodecamp.org

  - https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/

  Programiz.com

  - https://www.programiz.com/javascript/examples/string-comparison
