import words from "./part1.json";
import messages from "./part2.json";

type MSGType = {
  userId: number;
  message: string;
  createdAt: string;
};

export function first(words: string[]) {
  //Find the first element in alphabetical order for an array of strings using a loop.
  // For example, for this array: a=['my','name','is','john','doe']; the result should be 'doe'.

  words.sort();
  return words[0];
}

export function second(messages: MSGType[]) {
  //  There is an array of objects with 3 fields:
  //
  // `userId` - user ID
  // `message` - text of the message
  // `createdAt` - date and time of message
  //
  // Write a function to retrieve text of the last message for every user.

  let result: Record<number, MSGType> = {};

  messages.forEach((msg: MSGType) => {
    if (result[msg.userId]) {
      if (result[msg.userId].createdAt < msg.createdAt)
        result[msg.userId] = msg;
    } else result[msg.userId] = msg;
  });

  return Object.values(result).map((msg) => msg.message);
}

console.log(first(words));
console.log(second(messages));
