
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  
  return (
    <>
    <Navbar/>  
    <TextForm heading="Enter The Text to Analyze Below"/>
    <About/>
    </>
  );
}

export default App;
