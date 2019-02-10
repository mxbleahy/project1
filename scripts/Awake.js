"use strict";

module.exports = robot => {
  // When a member mention "joke" word the BOT will randomly pick one and display it.
  const joke = [
    "What did the fish say when it hit the wall?.. Damn!",
    "A foo walks into a bar, takes a look around and says... Hello, World!",
    "To understand what recursion is... you must first understand recursion!",
    "How many programmers does it take to change a light bulb? None, thats a hardware problem!",
    "A SQL query goes into a bar, walks up to two tables and ask... Can I join you?",
    "What kind of shoes does a thief wear? Sneakers!"
  ];

  robot.hear(/joke/i, res => {
    res.emote(res.random(joke));
  });

  // when a member mention "study shows" word the BOT will randomly pick one and display it,
  // The BOT will say Just Kidding when the timeout was reached.

  const studyShows = [
    "Study shows 95% of men in Riyadh are have bad taste in food",
    "Study shows older people more likely to share fake news on Facebook",
    "Study shows 75% of women in Saudi Arabia are have bad taste in music",
    "Scientific study shows that adults sleep better when rocked as they snooze",
    "Study shows that new vocabulary can be learned while sleeping"
  ];

  robot.hear(/study shows/i, res => {
    res.send(res.random(studyShows));
    setTimeout(() => res.send("Just Kidding !!!!"), 7000);
  });

  // Here the BOT Brain will save how many time the member asked for dummy data.
  const dummyData = [
    "Name: Vincent Richardson Age:20",
    "Name: Elian Martin Age:29",
    "Name: Ashton Robinson Age:24",
    "Name: Alen Tucker Age:30",
    "Name: Hailey Phillips Age:34",
    "Name: Chester Cooper Age:50"
  ];

  robot.respond(/dummy data/i, response => {
    const dummy = +robot.brain.get("totalDummyData") || 0;

    if (dummy > 3) {
      response.reply("YOU HAVE TO ASK FOR REAL DATA, SIR :persevere:");
      return;
    }

    response.reply(response.random(dummyData));
    robot.brain.set("totalDummyData", dummy + 1);
  });

  robot.respond(/clear/i, res => {
    robot.brain.set("totalDummyData", 0);
    res.reply("CLEARED, SIR :+1:");
  });
};
