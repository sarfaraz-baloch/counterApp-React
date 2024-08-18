  import { useState } from 'react';
  import Home from './Componets/Home';
  import Button from './Componets/Button';
  import './App.css';

  function App() {
    const [result, setResult] = useState(0);

    // Function to update the result based on the button click
    const updateResult = (newResult) => {
      setResult(newResult);
    };

    return (
      <div>
        <Home result={result} />
        <div className='buttonRapper'>
        <Button updateResult={updateResult} value={4 * 20} text="4x20" />
        <Button updateResult={updateResult} value={10 * 5} text="10x5" />
        <Button updateResult={updateResult} value={9 * 6} text="9x6" />
        <Button updateResult={updateResult} value={45 * 20} text="45x20" />
        <Button updateResult={updateResult} value={24 * 20} text="24x20" />
        <Button updateResult={updateResult} value={54 * 8} text="54x8" />
        </div>
      </div>
    );
  }

  export default App;
