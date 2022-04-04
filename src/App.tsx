import React from "react";
import logo from "./assets/logo.svg";
import "./assets/App.css";
import Button from "@mui/material/Button";
import { Grid, InputAdornment, InputLabel, TextField } from "@mui/material";

function App() {
  return (
    // Parent element
    <div className="App">
      <header className="AppHeader"></header>

      {/* Our input fields and button functionality */}
      <div className="Column">
        <Grid container direction={"column"} spacing={5}>
          <Grid item>
            <TextField
              id={"teamSize"}
              label="Team Size: "
              helperText="Enter the number of people on the team here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">&gt;&gt;</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id={"daysThisSprint"}
              label={"Days this Sprint: "}
              helperText="Enter the number of days for the sprint here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">&gt;&gt;</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id={"daysThisSprint"}
              label={"Working Hours per Day: "}
              helperText="Enter the number of product. hours each day"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">&gt;&gt;</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained">Upload</Button>
            <Button variant="contained">Download</Button>
          </Grid>
        </Grid>
      </div>
      {/* Our text and graph representation of the results*/}
      <div className="Column">
        <img src={logo} className="App-logo" alt="logo" />
        <p>!Capacity Graph Placeholder!</p>
        <a
          className="Github-link"
          href="https://github.com/ShaneMCrotty"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/ShaneMCrotty
        </a>
      </div>
    </div>
  );
}

export default App;
