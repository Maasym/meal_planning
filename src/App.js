import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2500);
  const [button, setButton] = useState(true)

  const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setMealData(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [button])

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function search(){
    setButton(!button)
  }

  return (
    <div className="App">
      <section className="controls">
        <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
        />
        <button onClick={search}>Get Daily Meal Plan</button>
      </section>
    </div>
  );
}

export default App;
