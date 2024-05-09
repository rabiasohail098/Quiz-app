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
let quizAns = await inquirer.prompt([
    {
        name: "quiz1",
        type: "list",
        message: "Quran Pak me total kitni surtean hain?",
        choices: [112, 114, 140, 130]
    },
    { name: "quiz2",
        type: "list",
        message: "Quran Pak kitny arsay me mukamal nazil hoa?",
        choices: ["35 saal", "25 saal", "23 saal", "15 saal"]
    },
    {
        name: "quiz3",
        type: "list",
        message: "Fatahe Makkah k bad Khana Kaba ki chabi ka muhafiz kon tha?",
        choices: ["Usman Bin Talha", "Abbu Suffiyan", "Abbas", "Koi bhi nahi"]
    },
    {
        name: "quiz4",
        type: "list",
        message: "Quran Pak me makki surton ki tadad kya hy?",
        choices: [84, 82, 86, 88]
    },
    {
        name: "quiz5",
        type: "list",
        message: "Ek mard ko kafan ki kitni chadron me lapeta jata hy?",
        choices: [5, 4, 2, 3]
    },
    {
        name: "quiz6",
        type: "list",
        message: "Hazrat Muhammad S.A.W ne kitni bar umrah ada kiya?",
        choices: [1, 2, 3, 4]
    },
    {
        name: "quiz7",
        type: "list",
        message: "Naam Muhammad Quran Pak me kitni bar aya hy?",
        choices: [2, 3, 4, 5]
    },
    {
        name: "quiz8",
        type: "list",
        message: "Hazrat Muhammad ko Ahmed naam se kis surah me pukara gaya hy?",
        choices: ["Surah-e-Yaseen", "Surah-e-Muzamil", "Surah-e-Muhammad", "Surah-e-sauf"]
    },
    {
        name: "quiz9",
        type: "list",
        message: "Ghazwah-e-Khandaq me kitny din tak Madinay ka muhasrah kiya gaya tha?",
        choices: ["15 din", "45 din", "30 din", "60 din"]
    },
    {
        name: "quiz10",
        type: "list",
        message: "Kis pegamber ki qoum phataron ki barish se tabah hoi the?",
        choices: ["Hazrat Yaqoob A.S", "Hazrat Shoaib A.S", "Hazrat Hood A.S", "Hazrat Luot A.S"]
    }
]);
if (quizAns.quiz1 == 114) {
    console.log(++score);
}
if (quizAns.quiz2 == "23 saal") {
    console.log(++score);
}
if (quizAns.quiz3 == "Usman Bin Talha") {
    console.log(++score);
}
if (quizAns.quiz4 == 86) {
    console.log(++score);
}
if (quizAns.quiz5 == 3) {
    console.log(++score);
}
if (quizAns.quiz6 == 4) {
    console.log(++score);
}
if (quizAns.quiz7 == 4) {
    console.log(++score);
}
if (quizAns.quiz8 == "Surah-e-sauf") {
    console.log(++score);
}
if (quizAns.quiz9 == "30 din") {
    console.log(++score);
}
if (quizAns.quiz10 == "Hazrat Luot A.S") {
    console.log(++score);
    console.log(chalk.italic.bold.redBright(`Your score is ${score} out of 10`));
}
