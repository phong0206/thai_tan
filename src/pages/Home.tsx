/* eslint-disable react/self-closing-comp */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Info from '../components/Info';
import '../App.css';
import * as React from 'react';
import ScrollTopButton from '../components/ScrollTopButton';
import ButtonInfo from '../components/ButtonInfo';
import FacebookIcon from '@mui/icons-material/Facebook';

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
  }, [windowWidth]);

  return (
    <div className="App">
      <Header windowWidth={windowWidth} />
      <Info windowWidth={windowWidth} />
      <Slider windowWidth={windowWidth} Unit="PHÁP LÝ DÂN SỰ" />
      <Slider windowWidth={windowWidth} Unit="PHÁP LÝ KINH TẾ" />
      <Slider windowWidth={windowWidth} Unit="DỊCH VỤ" />
      {windowWidth > 1100 ? <ScrollTopButton /> : <div></div>}
      <ButtonInfo
        bottom={50}
        Icon={
          <a href="tel:0326603593">
            <img
              id="draggableBtn"
              className="pulse-btn"
              src="https://vtlf.vn/wp-content/plugins/button-contact-vr/img/phone.png"
              alt="Zalo"
              width={30}
              height={30}
            />
          </a>
        }
      />
      <ButtonInfo bottom={120} Icon={<FacebookIcon width="18px" />} />
      <ButtonInfo
        bottom={190}
        Icon={
          <img
            src="https://vtlf.vn/wp-content/plugins/button-contact-vr/img/zalo.png"
            alt="Zalo"
            width={30}
            height={30}
          />
        }
      />

      <Footer />
    </div>
  );
}

export default Home;
