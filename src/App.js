
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './component/Form';
import List from './component/List';
import Edit from './component/Edit';
import Layout from './component/Layout'
// import './App.css';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
    <Layout/>
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
