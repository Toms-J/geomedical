import './App.css';
import ResponsiveAppBar from './components/navbar';
import ComboBox from './components/combobox';
import FreeSolo from './components/serchInput';

import ActionAreaCard from './components/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar/>
      </header>
      <body>
        <div className='container'>
          <div className='filter-container'>
            <h4>Filtra per:</h4>
            <ComboBox label='Categoria'/>
            <ComboBox label='Provincia'/>
            <FreeSolo />
          </div>
          <div className='grid-container'>
              <ActionAreaCard></ActionAreaCard>
              <ActionAreaCard></ActionAreaCard>
              <ActionAreaCard></ActionAreaCard>
              <ActionAreaCard></ActionAreaCard>
              <ActionAreaCard></ActionAreaCard>
              <ActionAreaCard></ActionAreaCard>
              <ActionAreaCard></ActionAreaCard>
              <ActionAreaCard></ActionAreaCard>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
