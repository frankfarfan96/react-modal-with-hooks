import { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
        <h1>Hello, click on the button to open the modal.</h1>
        <button className='openModalBtn' onClick={() => {setOpenModal(true);}}>open</button>
        <Modal/>
    </div>
  );
}

export default App;
