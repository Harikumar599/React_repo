import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Home } from './Componens/Congrads/Congrads';
import { Super } from './Componens/Super/super';
import { SocialButton } from './Componens/Socail/Social';
import { Notify } from './Componens/Notification/Notify';
import { Login } from './Componens/LoginPage/Login';
import { Technology } from './Componens/Technology/Technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Super' element={<Super />}></Route>
          <Route path='/SocialButton' element={<SocialButton />}></Route>
          <Route path='/Notify' element={<Notify />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Technology' element={<Technology />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}


export default App;
