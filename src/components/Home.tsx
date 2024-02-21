import Header from './Header';
import Footer from './Footer';
import Slider from './Slider';
import Info from './Info';
import '../App.css';
import * as React from 'react';

function Home() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header windowWidth={windowWidth} />
      <Info windowWidth={windowWidth} />
      <Slider windowWidth={windowWidth} />
      <Footer windowWidth={windowWidth} />
    </div>
  );
}

export default Home;
