const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

//Manipulating the data to print constellations where 
//starsWithPlanets < 10. -AN
axios
    .get(url)
    .then((response) => {
        const result = response.data.filter((constellation) => {
            return constellation.starsWithPlanets < 10;
        });
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });

//Creating a new constellation. -AN
 axios
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });

//Deleting a constellation. -AN
const idToDelete = "Lp8-rGm";
axios.delete(`${url}/${idToDelete}`);

axios.get(`${url}/${idToDelete}`);