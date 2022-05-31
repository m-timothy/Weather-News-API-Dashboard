import WeatherDisplay from "./components/WeatherDisplay.js"
import NewsFeed from "./components/NewsFeed"
import axios from "axios";


function App() {
    return (
        <div className="app">
            <WeatherDisplay/>
            <NewsFeed/>
        </div>
    );
}

export default App;
