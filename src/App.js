import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='container__title'>
        <h1>Pokemon Search</h1>
        <div className='container__search'>
          <input
            type='text'
            placeholder='Search Pokemon'
          />
          <button>Search</button>
        </div>
        <div className='container__table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bulbasur</td>
              <td>Grass, Poison</td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
}

export default App;
