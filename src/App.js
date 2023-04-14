import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Pokemon Search</h1>
      <div>
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
  );
}

export default App;
