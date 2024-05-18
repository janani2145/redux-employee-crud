
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './component/Form';
import List from './component/List';
import Edit from './component/Edit';
import Navbar from './component/Navbar';
// import './App.css';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
