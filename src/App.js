import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Resister from './components/Resister/Resister';
import Home from './components/Home/Home';
import SingleDetail from './components/SinagleDetail/SingleDetail';
import AuthProvider, { AuthContext } from './AuthContex/AuthContex';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Heder from './components/Heder/Heder';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import DoctorPage from './components/Doctors/DoctorPage';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (

    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Heder></Heder>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Resister></Resister>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>

            <Route exact path="/doctors">
              <DoctorPage></DoctorPage>
            </Route>
            <Route exact path="/contract">
              <Contract></Contract>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <SingleDetail></SingleDetail>
            </PrivateRoute>
            <Route>
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>



    </div>
  );
}

export default App;
