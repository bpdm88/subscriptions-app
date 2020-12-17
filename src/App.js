import "./styles/index.css";
import List from "./components/List";
import Header from "./components/Header";
import DropDown from "./components/DropDown";
import Filter from "./components/Filter";

const App = () => (
    <>
        <Header />
        <DropDown />
        <Filter />
        <List />
    </>
);

export default App;
