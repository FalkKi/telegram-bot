import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { tg, onToggleButton } = useTelegram()
  useEffect(() => {
    tg.ready()
  }, []);

  return (
    <div className="App">
      <Header />
      HGUUUIIII
      <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;
