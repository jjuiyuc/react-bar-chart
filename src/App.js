import "./App.css";

//component
// import MainContainer from "./component/MainContainer";
import MainContent from "./component/MainContent";
import Chart from "./page/ChartPage";

function App() {
    return (
        <div className="App">
            <MainContent>
                {/* <MainContainer> */}
                <Chart />
                {/* </MainContainer> */}
            </MainContent>
        </div>
    );
}

export default App;
