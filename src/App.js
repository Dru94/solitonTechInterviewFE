import './App.css';
import { Routes, Route } from "react-router-dom"
import CreateFleet from './pages/createFleet';
import EditFleet from './pages/editFleet';
import DeleteFleet from './pages/deleteFleet';
import Home from './pages/home';
import Navigation from './components/navigation';
import Drivers from './pages/drivers/drivers';
import CreateDriver from './pages/drivers/createDriver';
import EditDriver from './pages/drivers/editDriver';
import DeleteDriver from './pages/drivers/deleteDriver';
import Cars from './pages/cars/cars';
import CreateCar from './pages/cars/createCar';
import EditCar from './pages/cars/editCar';
import DeleteCars from './pages/cars/deleteCars';
import './assets/css/home.css';
import Footer from './components/footer';



function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Navigation/>
      </div>
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="add-fleet" element={ <CreateFleet/> } />
        <Route path="edit-fleet" element={<EditFleet/>}/>
        <Route path="delete-fleet" element={ <DeleteFleet/> } />

        <Route path="drivers" element={<Drivers/>}/>
        <Route path="add-driver" element={<CreateDriver/>}/>
        <Route path="edit-driver-details" element={<EditDriver/>} />
        <Route path="delete-driver" element={<DeleteDriver/>} />

        <Route path="cars" element={<Cars/>}/>
        <Route path="add-car" element={<CreateCar/>}/>
        <Route path="edit-car" element={<EditCar/>}/>
        <Route path="delete-car" element={<DeleteCars/>}/>
        </Routes>

        <div className='container'>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
