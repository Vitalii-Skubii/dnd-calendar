import React from 'react';
import Calendar from './components/Calendar/Calendar';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => (
  <div className="App">
    <GlobalStyles />
    <Calendar />
  </div>
);
export default App;
