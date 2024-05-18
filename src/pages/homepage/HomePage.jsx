import React from "react";
import "./HomePage.css";
import FormControl from "@mui/material/FormControl";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const HomePage = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="homePageContainer">
      <div className="filterContainer">
        <TextField defaultValue="Hello World" />
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="cardsContainer">
        <Box
          display="grid"
          gap={2}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Card sx={{ width: 264 }}>
              <CardMedia
                sx={{ height: 160 }}
                image="https://wallup.net/wp-content/uploads/2019/10/507734-india-flag-flags-indian.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
