import React from 'react';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import ProductDisplay from './pages/Home/HomePage';
import './App.scss';

const App : React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProductDisplay />
      <Footer />
    </div>
  );
}

export default App;
