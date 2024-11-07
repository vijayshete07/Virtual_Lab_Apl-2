import React, { useState } from 'react';
import { Grid, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const correctAnswers = {
    question1: "V8",
    question2: "CommonJS",
    question3: "path",
    question4: "child_process",
    question5: "Events",
    question6: "process.argv",
    question7: "package.json",
    question8: "exports",
    question9: "Asynchronous",
    question10: "global",
    question11: "Event loop",
    question12: "require",
    question13: "readFile",
    question14: "npm install",
    question15: "REPL",
    question16: "non-blocking",
    question17: "assert",
    question18: "cluster",
    question19: "buffer",
    question20: "console.log",
    question21: "fs",
    question22: "url",
    question23: "crypto",
    question24: "stream",
    question25: "http",
    question26: "net",
    question27: "child_process",
    question28: "dns",
    question29: "fs.promises",
    question30: "process.exit",
    question31: "npm run",
    question32: "npm uninstall",
    question33: "child_process",
    question34: "cluster",
    question35: "A JavaScript runtime built on Chrome's V8 engine",
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
              <Typography variant="h6"><b>1. Which JavaScript engine does Node.js use?</b></Typography>
              <RadioGroup name="question1" value={answers.question1} onChange={handleChange}>
                <FormControlLabel value="SpiderMonkey" control={<Radio />} label="a: SpiderMonkey" />
                <FormControlLabel value="V8" control={<Radio />} label="b: V8" />
                <FormControlLabel value="Chakra" control={<Radio />} label="c: Chakra" />
                <FormControlLabel value="Nashorn" control={<Radio />} label="d: Nashorn" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>2. Which module system is used by Node.js for managing dependencies?</b></Typography>
              <RadioGroup name="question2" value={answers.question2} onChange={handleChange}>
                <FormControlLabel value="AMD" control={<Radio />} label="a: AMD" />
                <FormControlLabel value="CommonJS" control={<Radio />} label="b: CommonJS" />
                <FormControlLabel value="UMD" control={<Radio />} label="c: UMD" />
                <FormControlLabel value="ES6" control={<Radio />} label="d: ES6 Modules" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Adding additional questions */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>3. Node.js is primarily designed for which type of operations?</b></Typography>
              <RadioGroup name="question16" value={answers.question16} onChange={handleChange}>
                <FormControlLabel value="blocking" control={<Radio />} label="a: Blocking" />
                <FormControlLabel value="non-blocking" control={<Radio />} label="b: Non-blocking" />
                <FormControlLabel value="synchronous" control={<Radio />} label="c: Synchronous" />
                <FormControlLabel value="parallel" control={<Radio />} label="d: Parallel" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>4. Which module is used for assertions in Node.js?</b></Typography>
              <RadioGroup name="question17" value={answers.question17} onChange={handleChange}>
                <FormControlLabel value="assert" control={<Radio />} label="a: assert" />
                <FormControlLabel value="buffer" control={<Radio />} label="b: buffer" />
                <FormControlLabel value="path" control={<Radio />} label="c: path" />
                <FormControlLabel value="events" control={<Radio />} label="d: events" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>5. Which module in Node.js allows multiple child processes to be created?</b></Typography>
              <RadioGroup name="question18" value={answers.question18} onChange={handleChange}>
                <FormControlLabel value="fs" control={<Radio />} label="a: fs" />
                <FormControlLabel value="cluster" control={<Radio />} label="b: cluster" />
                <FormControlLabel value="path" control={<Radio />} label="c: path" />
                <FormControlLabel value="events" control={<Radio />} label="d: events" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>6. What is used in Node.js to handle binary data?</b></Typography>
              <RadioGroup name="question19" value={answers.question19} onChange={handleChange}>
                <FormControlLabel value="string" control={<Radio />} label="a: String" />
                <FormControlLabel value="array" control={<Radio />} label="b: Array" />
                <FormControlLabel value="buffer" control={<Radio />} label="c: Buffer" />
                <FormControlLabel value="object" control={<Radio />} label="d: Object" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>7. Which function is commonly used to print data to the console in Node.js?</b></Typography>
              <RadioGroup name="question20" value={answers.question20} onChange={handleChange}>
                <FormControlLabel value="console.log" control={<Radio />} label="a: console.log" />
                <FormControlLabel value="print" control={<Radio />} label="b: print" />
                <FormControlLabel value="write" control={<Radio />} label="c: write" />
                <FormControlLabel value="echo" control={<Radio />} label="d: echo" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Adding more questions */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>8. What module is used to work with file paths in Node.js?</b></Typography>
              <RadioGroup name="question21" value={answers.question21} onChange={handleChange}>
                <FormControlLabel value="fs" control={<Radio />} label="a: fs" />
                <FormControlLabel value="url" control={<Radio />} label="b: url" />
                <FormControlLabel value="path" control={<Radio />} label="c: path" />
                <FormControlLabel value="crypto" control={<Radio />} label="d: crypto" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>9. Which module is used to create secure hash algorithms in Node.js?</b></Typography>
              <RadioGroup name="question22" value={answers.question22} onChange={handleChange}>
                <FormControlLabel value="fs" control={<Radio />} label="a: fs" />
                <FormControlLabel value="url" control={<Radio />} label="b: url" />
                <FormControlLabel value="crypto" control={<Radio />} label="c: crypto" />
                <FormControlLabel value="http" control={<Radio />} label="d: http" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="h6"><b>10. What is used to create a web server in Node.js?</b></Typography>
              <RadioGroup name="question23" value={answers.question23} onChange={handleChange}>
                <FormControlLabel value="http" control={<Radio />} label="a: http" />
                <FormControlLabel value="https" control={<Radio />} label="b: https" />
                <FormControlLabel value="http2" control={<Radio />} label="c: http2" />
                <FormControlLabel value="socket" control={<Radio />} label="d: socket" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Submit button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </form>

      {submitted && (
        <Typography variant="h6" color="primary" gutterBottom>
          Your Score: {score} / 35
        </Typography>
      )}
    </div>
  );
}

export default Quiz;
