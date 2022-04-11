import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setMealData(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  function handleChange(e) {
    setCalories(e.target.value);
  }


  return (
    <div className="App">

    </div>
  );
}

export default App;
