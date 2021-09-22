/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
This is an if...else statement. If the value of doorChoice is strictly equal to 1, then it runs the first block of code. If that comparison comes back false (doorChoice doesn't equal 1), then the second block of code is executed.

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing has a new value assigned depending on the result of the if else statement.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
bearClothing would still be "scarf", because that is the code that is executed if doorChoice DOESN'T EQUAL 1.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
If bearChoice strictly equals 1, then the first block of code is executed. If that first comparison is false, then a second comparison is made. If bearChoice stritcly equals 2, then the second block of code is executed. If both the first and then second comparisons are false, then a third comparison is made. If bearChoice is strictly equal to 3, then the third code block is executed. If all three of these comparison statements return false, then the final code block is executed.
As soon as one of the code blocks is executed, the rest of the statement is ignored, and the script continues running on line 36.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
My favourit ending is "You stay with the bear and become its best friend!"

*/
