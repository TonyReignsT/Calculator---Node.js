 //jshint esversion:6
 const express = require('express');
 const bodyParser =require('body-parser');

 const app = express();
 app.use(express.urlencoded({extended: true}));

 app.get("/", (req, res)=> {
    // res.end(`${__dirname}/`)
    res.sendFile(`${__dirname}/index.html`)
 });

 app.post("/", (req, res) => {
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let result = num1 + num2;
    res.send("The result is: " + result);
    // res.send("Thanks for the post");
 });

 //BMI Calculator route
 app.get("/bmiCalculator", (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`);
 }),

 app.post("/bmiCalculator", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);
    let conclusion 
     if (bmi < 18.5){
        conclusion = "You are underweight."
    } else if (bmi > 18.5 && bmi < 24.9) {
        conclusion = "You have normal weight"
    } else if(bmi >= 25 && bmi < 29.9) {
        conclusion = "You are overweight"
    } else if(bmi == 30 || bmi > 30) {
        conclusion = "You are Obese!"
    }
    res.send(`Your BMI is: ${bmi.toFixed(2)} 
    - Conclusion: ${conclusion}`);
    
 })

 app.listen(3000, ()=> {
    console.log("Server running on port 3000...");
 });
