#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.greenBright(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"));
console.log(chalk.bold.italic.yellowBright(" $$$$$$$$$$  $$    $$  $$  $$$$$$$$"));
console.log(chalk.bold.italic.redBright("|$|      |$| $$    $$  $$      $"));
console.log(chalk.bold.italic.blueBright("|$|      |$| $$    $$  $$    $"));
console.log(chalk.bold.italic.magentaBright("|$|      \|$| $$    $$  $$  $"));
console.log(chalk.bold.italic.cyanBright(" $$$$$$$$\\$  $$$$$$$$  $$  $$$$$$$$"));
console.log(chalk.bold.italic.greenBright(",,,,,,,,,,\\,,,,,,,,,,,,,,,,,,,,,,,,"));
console.log(chalk.bold.italic.overline.underline.bgCyanBright("\n<<<<<<<< Welcome to Islamic Quiz. >>>>>>>>"));
let score = 0;
let quiz1Ans = await inquirer.prompt({
    name: "quiz1",
    type: "list",
    message: "Quran Pak me total kitni surtean hain?",
    choices: ["112", "114", "140", "130"]
});
if (quiz1Ans.quiz1 == "114") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz1Ans.quiz1 == "112") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select 112 Correct Answer is 114`));
}
else if (quiz1Ans.quiz1 == "140") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select 140 Correct Answer is 114`));
}
else if (quiz1Ans.quiz1 == "130") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select 130 Correct Answer is 114`));
}
let quiz2Ans = await inquirer.prompt({ name: "quiz2",
    type: "list",
    message: "Quran Pak kitny arsay me mukamal nazil hoa?",
    choices: ["35 saal", "25 saal", "23 saal", "15 saal"]
});
if (quiz2Ans.quiz2 == "23 saal") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz2Ans.quiz2 == "35 saal") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "35" saal Correct Answer is 23 saal`));
}
else if (quiz2Ans.quiz2 == "25 saal") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "25" saal Correct Answer is 23 saal`));
}
else if (quiz2Ans.quiz2 == "15 saal") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "15" saal Correct Answer is 23 saal`));
}
let quiz3Ans = await inquirer.prompt({
    name: "quiz3",
    type: "list",
    message: "Fatahe Makkah k bad Khana Kaba ki chabi ka muhafiz kon tha?",
    choices: ["Usman Bin Talha", "Abbu Suffiyan", "Abbas", "Koi bhi nahi"]
});
if (quiz3Ans.quiz3 == "Usman Bin Talha") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct."));
    console.log(++score);
}
else if (quiz3Ans.quiz3 == "Abbu Suffiyan") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Abbu Suffiyan" correct Answer is Usman Bin Talha.`));
}
else if (quiz3Ans.quiz3 == "Abbas") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Abbas" correct Answer is Usman Bin Talha.`));
}
else if (quiz3Ans.quiz3 == "Koi bhi nahi") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Koi bhi nahi" correct Answer is Usman Bin Talha.`));
}
let quiz4Ans = await inquirer.prompt({
    name: "quiz4",
    type: "list",
    message: "Quran Pak me makki surton ki tadad kya hy?",
    choices: ["84", "82", "86", "88"]
});
if (quiz4Ans.quiz4 == "86") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz4Ans.quiz4 == "82") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "82" correct Answer is 86.`));
}
else if (quiz4Ans.quiz4 == "84") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "84" correct Answer is 86.`));
}
else if (quiz4Ans.quiz4 == "88") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "88" correct Answer is 86.`));
}
let quiz5Ans = await inquirer.prompt({
    name: "quiz5",
    type: "list",
    message: "Ek mard ko kafan ki kitni chadron me lapeta jata hy?",
    choices: ["5", "4", "2", "3"]
});
if (quiz5Ans.quiz5 == "3") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz5Ans.quiz5 == "4") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "4" correct Answer is 3.`));
}
else if (quiz5Ans.quiz5 == "2") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "2" correct Answer is 3.`));
}
else if (quiz5Ans.quiz5 == "5") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "5" correct Answer is 3.`));
}
let quiz6Ans = await inquirer.prompt({
    name: "quiz6",
    type: "list",
    message: "Hazrat Muhammad S.A.W ne kitni bar umrah ada kiya?",
    choices: ["1", "2", "3", "4"]
});
if (quiz6Ans.quiz6 == "4") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz6Ans.quiz6 == "1") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "1" correct Answer is 4.`));
}
else if (quiz6Ans.quiz6 == "2") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "2" correct Answer is 4.`));
}
else if (quiz6Ans.quiz6 == "3") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "3" correct Answer is 4.`));
}
let quiz7Ans = await inquirer.prompt({
    name: "quiz7",
    type: "list",
    message: "Naam Muhammad Quran Pak me kitni bar aya hy?",
    choices: ["2", "3", "4", "5"]
});
if (quiz7Ans.quiz7 == "4") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz7Ans.quiz7 == "2") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "2" correct Answer is 4.`));
}
else if (quiz7Ans.quiz7 == "3") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "3" correct Answer is 4.`));
}
else if (quiz7Ans.quiz7 == "5") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "5" correct Answer is 4.`));
}
let quiz8Ans = await inquirer.prompt({
    name: "quiz8",
    type: "list",
    message: "Hazrat Muhammad ko Ahmed naam se kis surah me pukara gaya hy?",
    choices: ["Surah-e-Yaseen", "Surah-e-Muzamil", "Surah-e-Muhammad", "Surah-e-sauf"]
});
if (quiz8Ans.quiz8 == "Surah-e-sauf") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz8Ans.quiz8 == "Surah-e-Yaseen") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Surah-e-Yaseen" correct Answer is Surah-e-sauf.`));
}
else if (quiz8Ans.quiz8 == "Surah-e-Muzamil") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Surah-e-Muzamil" correct Answer is Surah-e-sauf.`));
}
else if (quiz8Ans.quiz8 == "Surah-e-Muhammad") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Surah-e-Muhammad" correct Answer is Surah-e-sauf.`));
}
let quiz9Ans = await inquirer.prompt({
    name: "quiz9",
    type: "list",
    message: "Ghazwah-e-Khandaq me kitny din tak Madinay ka muhasrah kiya gaya tha?",
    choices: ["15 din", "45 din", "30 din", "60 din"]
});
if (quiz9Ans.quiz9 == "30 din") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz9Ans.quiz9 == "15 din") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "15 din" correct Answer is 30 din.`));
}
else if (quiz9Ans.quiz9 == "45 din") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "45 din" correct Answer is 30 din.`));
}
else if (quiz9Ans.quiz9 == "60 din") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "60 din" correct Answer is 30 din.`));
}
let quiz10Ans = await inquirer.prompt({
    name: "quiz10",
    type: "list",
    message: "Kis Pegamber ki Qoum phataron ki barish se tabah hoi the?",
    choices: ["Hazrat Yaqoob A.S", "Hazrat Shoaib A.S", "Hazrat Hood A.S", "Hazrat Luot A.S"]
});
if (quiz10Ans.quiz10 == "Hazrat Luot A.S") {
    console.log(chalk.bold.italic.underline.greenBright("Your answer is correct"));
    console.log(++score);
}
else if (quiz10Ans.quiz10 == "Hazrat Yaqoob A.S") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Hazrat Yaqoob A.S"correct Answer is Hazrat Luot A.S.`));
}
else if (quiz10Ans.quiz10 == "Hazrat Shoaib A.S") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Hazrat Shoaib A.S"correct Answer is Hazrat Luot A.S.`));
}
else if (quiz10Ans.quiz10 == "Hazrat Hood A.S") {
    console.log(chalk.bold.italic.underline.redBright(`Wrong Answer\nYou select "Hazrat Hood A.S"correct Answer is Hazrat Luot A.S.`));
}
console.log(chalk.italic.bold.magentaBright(`Your score is ${score} out of 10`));
