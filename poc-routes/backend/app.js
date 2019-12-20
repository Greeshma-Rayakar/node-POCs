const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin , X-Requested-With , Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,PUT, OPTIONS");
  next();

});

function getNextMonday(){
  const day = new Date();
   day.setDate(day.getDate() + (1 + 7 - day.getDay()) % 7);
   return day;
}

function getDay(i){
  const day = new Date();
  const result = getNextMonday();
  day.setDate(result.getDate() + i);
  return day;
}

app.use("/api/monday",(req,res,next) => {
   const result = getNextMonday();
   res.status(200).json({
        dateString : result.toUTCString(),
        weekDay : days[result.getDay()]
    });
});

app.use("/api/tuesday",(req,res,next) => {
  const result = getDay(1);
   res.status(200).json({
    dateString : result.toUTCString(),
       weekDay : days[result.getDay()]
   });
});

app.use("/api/wednesday",(req,res,next) => {
  const result = getDay(2);
  res.status(200).json({
    dateString : result.toUTCString(),
      weekDay : days[result.getDay()]
  });
});

app.use("/api/thursday",(req,res,next) => {
  const result = getDay(3);
  res.status(200).json({
    dateString : result.toUTCString(),
      weekDay : days[result.getDay()]
  });
});

app.use("/api/friday",(req,res,next) => {
  const result = getDay(4);
  res.status(200).json({
    dateString : result.toUTCString(),
      weekDay : days[result.getDay()]
  });
});

app.use("/api/saturday",(req,res,next) => {
  const result = getDay(5);
   res.status(200).json({
    dateString : result.toUTCString(),
       weekDay : days[result.getDay()]
   });
});

app.use("/api/sunday",(req,res,next) => {
  const result = getDay(6);
   res.status(200).json({
    dateString : result.toUTCString(),
       weekDay : days[result.getDay()]
   });
});

module.exports = app;