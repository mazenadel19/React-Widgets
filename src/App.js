import "./App.css";
// import Accordion from './components/Accordion';
import Search from "./components/Search";

// const items = [
// 	{
// 		title: 'What is React?',
// 		content: 'React is a front end javascript framework',
// 	},
// 	{
// 		title: 'Why use React?',
// 		content: 'React is a favorite JS library among engineers',
// 	},
// 	{
// 		title: 'How do you use React?',
// 		content: 'You use React by creating components',
// 	},
// ];

function App() {
  return (
    <div
      className="ui container"
      style={{
        marginTop: "10px",
      }}
    >
      {/* <Accordion items={items} /> */} <Search />
    </div>
  );
}

export default App;
