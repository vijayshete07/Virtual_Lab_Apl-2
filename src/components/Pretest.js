import React, { useState } from 'react';
import { Grid, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswers = {
    question1: "To include external modules or files",
    question2: "express",
    question3: "http",
    question4: "EventEmitter",
    question5: "npm init",
    question6: "Asynchronous I/O",
    question7: "cluster",
    question8: "JavaScript",
    question9: "Read-Evaluate-Print Loop",
    question10: "global",
    question11: "Callback function",
    question12: "node server.js",
    question13: "Handling binary data",
    question14: "Node.js is single-threaded",
    question15: "Execute code after the current event loop completes",
    question16: "JavaScript",
    question17: "exports",
    question18: "npm install",
    question19: "non-blocking",
    question20: "path",
    question21: "Streams",
    question22: "V8",
    question23: "require",
    question24: "exports",
    question25: "package.json",
    question26: "npm run start",
    question27: "callback",
    question28: "Buffer",
    question29: "EventEmitter",
    question30: "setTimeout",
    question31: "node_modules",
    question32: "npm uninstall",
    question33: "child_process",
    question34: "cluster",
    question35: "Node.js"
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let calculatedScore = 0;
    Object.keys(correctAnswers).forEach((question) => {
      if (answers[question] === correctAnswers[question]) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'bisque' }}>
      <Typography variant="h4" gutterBottom><strong>Node.js Quiz</strong></Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          {/* Updated Questions and Options */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>1. What is the purpose of the require() function in Node.js?</b></Typography>
              <RadioGroup name="question1" value={answers.question1} onChange={handleChange}>
                <FormControlLabel value="To define environment variables" control={<Radio />} label="a: To define environment variables" />
                <FormControlLabel value="To include external modules or files" control={<Radio />} label="b: To include external modules or files" />
                <FormControlLabel value="To declare a new variable" control={<Radio />} label="c: To declare a new variable" />
                <FormControlLabel value="To run the Node.js application" control={<Radio />} label="d: To run the Node.js application" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>2. Which Node.js module is used to create a server?</b></Typography>
              <RadioGroup name="question2" value={answers.question2} onChange={handleChange}>
                <FormControlLabel value="express" control={<Radio />} label="a: express" />
                <FormControlLabel value="http" control={<Radio />} label="b: http" />
                <FormControlLabel value="fs" control={<Radio />} label="c: fs" />
                <FormControlLabel value="os" control={<Radio />} label="d: os" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Additional questions */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>3. How do you run a Node.js script from the command line?</b></Typography>
              <RadioGroup name="question26" value={answers.question26} onChange={handleChange}>
                <FormControlLabel value="node app.js" control={<Radio />} label="a: node app.js" />
                <FormControlLabel value="npm run start" control={<Radio />} label="b: npm run start" />
                <FormControlLabel value="npm start" control={<Radio />} label="c: npm start" />
                <FormControlLabel value="node server.js" control={<Radio />} label="d: node server.js" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>4. What type of function is passed as the argument in Node.js callbacks?</b></Typography>
              <RadioGroup name="question27" value={answers.question27} onChange={handleChange}>
                <FormControlLabel value="async function" control={<Radio />} label="a: async function" />
                <FormControlLabel value="callback" control={<Radio />} label="b: callback" />
                <FormControlLabel value="generator function" control={<Radio />} label="c: generator function" />
                <FormControlLabel value="promise function" control={<Radio />} label="d: promise function" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>5. What is Buffer in Node.js used for?</b></Typography>
              <RadioGroup name="question28" value={answers.question28} onChange={handleChange}>
                <FormControlLabel value="Handling binary data" control={<Radio />} label="a: Handling binary data" />
                <FormControlLabel value="Encrypting data" control={<Radio />} label="b: Encrypting data" />
                <FormControlLabel value="Reading data from a file" control={<Radio />} label="c: Reading data from a file" />
                <FormControlLabel value="Storing logs" control={<Radio />} label="d: Storing logs" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>6. What is the purpose of EventEmitter in Node.js?</b></Typography>
              <RadioGroup name="question29" value={answers.question29} onChange={handleChange}>
                <FormControlLabel value="Handling asynchronous events" control={<Radio />} label="a: Handling asynchronous events" />
                <FormControlLabel value="Handling database connections" control={<Radio />} label="b: Handling database connections" />
                <FormControlLabel value="Creating HTTP servers" control={<Radio />} label="c: Creating HTTP servers" />
                <FormControlLabel value="Handling errors" control={<Radio />} label="d: Handling errors" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>7. Which function is used to schedule a task for execution in the future in Node.js?</b></Typography>
              <RadioGroup name="question30" value={answers.question30} onChange={handleChange}>
                <FormControlLabel value="setInterval" control={<Radio />} label="a: setInterval" />
                <FormControlLabel value="setTimeout" control={<Radio />} label="b: setTimeout" />
                <FormControlLabel value="setImmediate" control={<Radio />} label="c: setImmediate" />
                <FormControlLabel value="clearInterval" control={<Radio />} label="d: clearInterval" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>8. What is the directory 'node_modules' used for in a Node.js project?</b></Typography>
              <RadioGroup name="question31" value={answers.question31} onChange={handleChange}>
                <FormControlLabel value="To store application source code" control={<Radio />} label="a: To store application source code" />
                <FormControlLabel value="To store external dependencies" control={<Radio />} label="b: To store external dependencies" />
                <FormControlLabel value="To store log files" control={<Radio />} label="c: To store log files" />
                <FormControlLabel value="To store configuration files" control={<Radio />} label="d: To store configuration files" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>9. How do you uninstall a Node.js package?</b></Typography>
              <RadioGroup name="question32" value={answers.question32} onChange={handleChange}>
                <FormControlLabel value="npm uninstall" control={<Radio />} label="a: npm uninstall" />
                <FormControlLabel value="npm remove" control={<Radio />} label="b: npm remove" />
                <FormControlLabel value="npm delete" control={<Radio />} label="c: npm delete" />
                <FormControlLabel value="npm detatch" control={<Radio />} label="d: npm detatch" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>10. What Node.js module allows you to execute child processes?</b></Typography>
              <RadioGroup name="question33" value={answers.question33} onChange={handleChange}>
                <FormControlLabel value="os" control={<Radio />} label="a: os" />
                <FormControlLabel value="child_process" control={<Radio />} label="b: child_process" />
                <FormControlLabel value="fs" control={<Radio />} label="c: fs" />
                <FormControlLabel value="http" control={<Radio />} label="d: http" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>11. What module is used to create multiple child processes in Node.js for load balancing?</b></Typography>
              <RadioGroup name="question34" value={answers.question34} onChange={handleChange}>
                <FormControlLabel value="cluster" control={<Radio />} label="a: cluster" />
                <FormControlLabel value="child_process" control={<Radio />} label="b: child_process" />
                <FormControlLabel value="os" control={<Radio />} label="c: os" />
                <FormControlLabel value="path" control={<Radio />} label="d: path" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>12. What is Node.js?</b></Typography>
              <RadioGroup name="question35" value={answers.question35} onChange={handleChange}>
                <FormControlLabel value="A JavaScript runtime built on Chrome's V8 engine" control={<Radio />} label="a: A JavaScript runtime built on Chrome's V8 engine" />
                <FormControlLabel value="A front-end framework" control={<Radio />} label="b: A front-end framework" />
                <FormControlLabel value="A database management system" control={<Radio />} label="c: A database management system" />
                <FormControlLabel value="A web server software" control={<Radio />} label="d: A web server software" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Grid>
      </form>

      {submitted && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Your Score: {score}</Typography>
        </div>
      )}
    </div>
  );
}

export default Quiz;
