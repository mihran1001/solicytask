import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Instructions from './components/Instructions/Instructions';
import './App.css';
import { useState } from 'react';

function App() {

  const [ nums, setNums ] = useState(JSON.parse(localStorage.getItem("cards")) || []);

  function onAdd() {
    localStorage.setItem("cards", JSON.stringify([...nums, {num: Math.trunc(Math.random() * 1000), key: Date.now()}]));
    setNums([...nums, {num: Math.trunc(Math.random() * 1000), key: Date.now()}])
  }

  function onSort() {
    localStorage.setItem("cards", JSON.stringify(nums.sort((a, b) => a.num - b.num)));
    setNums([...nums.sort((a, b) => a.num - b.num)]);
  }

  function onDelete(key) {
    localStorage.setItem("cards", JSON.stringify(nums.filter(elem => elem.key !== key)));
    setNums(nums.filter(elem => elem.key !== key));
  }
  
  return (
    <div className="App">
      <div className='firstContainer'>
        <Header onAdd={onAdd} onSort={onSort} />
        <Card nums={nums} onDelete={onDelete} />
        <Footer />
      </div>
      <Instructions />
    </div>
  );
}

export default App;
