import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import { ToastContainer } from 'react-toastify';
import SignupStep from './components/auth/SignupStep'
import Projects from './components/Dashboard/projects/Projects';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<SignupStep />} />
        <Route path="/projects/:userId" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App;
