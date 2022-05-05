import logo from "./logo.svg";
import "./App.css";

//component
// import MainContainer from "./component/MainContainer";
import MainContent from "./component/MainContent";
import Chart from "./component/Chart";

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
