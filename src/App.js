import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Upload from './components/Upload'
import Signup from './components/Signup'
import Login from './components/Login'
import Videos from './components/Videos'



const App = () => {
  return (
        
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Videos' element={<Videos/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>

    )
} 

export default App