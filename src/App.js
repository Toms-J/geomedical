import './App.css';
import ResponsiveAppBar from './components/navbar';
import ComboBox from './components/combobox';
import FreeSolo from './components/serchInput';
import ActionAreaCardRicerca from './components/card-ricerca';
import ActionAreaCardHome from './components/card-home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/ricerca",
      element: 
      <div className='container'>
        <div className='filter-container'>
          <h4>Filtra per:</h4>
          <ComboBox label='Categoria'/>
          <ComboBox label='Provincia'/>
          <FreeSolo />
        </div>
        <div className='grid-container'>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
            <ActionAreaCardRicerca></ActionAreaCardRicerca>
        </div>
      </div>,
    },

    {
      path: '/',
      element:
      <>
      <div className='fs-container'>
      <h1 className='title-payoff'>GEOMEDICAL</h1>
      <h2>Trova il professionista giusto per te</h2>
    </div>
    <div className='ss-container'>
      <div className='card-container'>
      <ActionAreaCardHome title='Sicurezza' />
      <ActionAreaCardHome title='Ricerca'/>
      <ActionAreaCardHome title='Affidabilità'/>
      </div>
      <div className='form-container'>
      <h1>Contattaci</h1>
      <form class="cf">
        <div class="half left cf">
          <input type="text" id="input-name" placeholder="Name"></input>
          <input type="email" id="input-email" placeholder="Email address"></input>
          <input type="text" id="input-subject" placeholder="Subject"></input>
        </div>
        <div class="half right cf">
          <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
        </div>  
        <input type="submit" value="Submit" id="input-submit"></input>
      </form>
      </div>
      </div>
      </>,
    }

  ]);

  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar/>
      </header>
      <body>
        <RouterProvider router={router} />
      </body>
      <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">Lorem ipsum dolor sit amet. 33 harum error et error reprehenderit ut beatae pariatur non possimus nesciunt ea deserunt praesentium qui quaerat consequatur et quam quia. Eum quae placeat rem illum fuga quo recusandae dolores vel voluptatum Quis in minus quam non asperiores eaque.</p>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Servizi</h6>
                <ul class="footer-links">
                  <li><a href="/">Ricerca</a></li>
                  <li><a href="/">Sicurezza</a></li>
                  <li><a href="/">Affidabilità</a></li>
                  <li><a href="/">Pagamenti</a></li>
                  <li><a href="/">Garanzie</a></li>
                </ul>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Contattaci</a></li>
                  <li><a href="/">Privacy Policy</a></li>
                  <li><a href="/">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <hr></hr>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by.
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li><a class="facebook" href="/"><i class="fa fa-facebook"></i></a></li>
                  <li><a class="linkedin" href="/"><i class="fa fa-linkedin"></i></a></li>   
                </ul>
              </div>
            </div>
          </div>
    </footer>
    </div>
  );
}

export default App;
