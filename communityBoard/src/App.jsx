import "./App.css";
import JobBoard from "./components/JobBoard";

const App = () => {
  return (
    <div className="App">
      <h2>Job Openings Board 💻</h2>
      {/* Render the JobBoard component */}
      <JobBoard />
    </div>
  );
};

export default App;
