import './App.css'

function App() {

  return (
    <>
      <div className='container'>
      <h1>Weather</h1>
      <div id='current'>
        <h2>Weather now</h2>
        <p>Measured 10.9. 12:05</p>
        <p id='temperature'>temperature: 21.5°</p>
        <p id="humidity">humidity: 59%</p>
        <p id="sun">Sun: 06:37 - 19:56</p>
      </div>
      </div>
    </>
  )
}

export default App
