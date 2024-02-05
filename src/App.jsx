import './App.css'
import Header from './components/navbar/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/register/Register'
import Login from './components/register/Login'
import Tasks from './components/tasks/Tasks'
import Dashboard from './components/dashboard/Dashboard'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/tasks' element={<Tasks/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Footer></Footer>
         
    </>
  )
}

export default App
