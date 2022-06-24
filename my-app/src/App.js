import './App.css';
import Navbar from'./components/Navbar';
import Card from'./components/Card';
import Title from './components/Titles';
import img1 from './assets/langostinos.jpg';
import img2 from './assets/doublecheese.jpg';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Title title='Section Burgers'/>
      <Card product='Prawns Burger' price='$10' img = {img1} />
      <Card product='Double Cheeseburger' price='$10' img = {img2} />
      <Card product='Prawns Burger' price='$10' img = {img1} />
    </div>
  );
}

export default App;
