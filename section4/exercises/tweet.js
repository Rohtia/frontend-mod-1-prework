/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp) {
    this.author = author;
    this.content = content;
    this.time = timeStamp;
    this.numberOfLikes = 0;
    this.comments = [];
  }
  likeThis() {
    this.numberOfLikes++;
  }
  addComment(Comment) {
    //ar newComment = Comment;
    this.comments.push(Comment);
  }

};

var tweet1 = new Tweet('Rohtia', 'This is my first tweet', '6:07 pm');
var tweet2 = new Tweet('Rohtia', 'I wish I knew how to do input in the console.', '6:20 pm');
var tweet3 = new Tweet('Rohtia', "I'll learn that soon. I'm learning faster than I would have.", '6:21 pm');

tweet1.addComment("Welcome");

console.log(tweet1);
console.log(tweet2);
console.log(tweet3);

tweet1.likeThis();
tweet2.likeThis();
tweet2.likeThis();
tweet2.addComment("You've got this!");
tweet2.likeThis();
tweet3.addComment("You are doing amazing!");
tweet3.likeThis();
tweet3.likeThis();
tweet2.addComment("You will soon");

console.log(tweet1);
console.log(tweet2);
console.log(tweet3);
