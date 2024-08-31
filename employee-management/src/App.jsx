import './App.css'
import EmployeeList from './components/EmployeeList'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import TestComponent from './TestComponent'
import AddEmployee from './components/AddEmployee'
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element = { <EmployeeList />}> </Route>
        { /* ctr and / to comment :  http://localhost:9000/employees */}

        <Route path='/employees' element = { <EmployeeList />}></Route>

        <Route path='/addEmployee' element = { <AddEmployee />}></Route>
       
        <Route path='/editEmployee/:id' element = { <AddEmployee />}></Route>
      </Routes>

      <Footer />
    
    </BrowserRouter>
    
    </>
  )
}

export default App
