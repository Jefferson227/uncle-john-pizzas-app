import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import './ChooseSize.css';

const ChooseSize: React.FC = () => {
  const [size, setSize] = useState(12);
  const getSizeName = (size: number) => {
    switch (size) {
      case 10: return 'small';
      case 12: return 'medium';
      case 14: return 'large';
      default: return 'medium';
    }
  };
  const getPrice = (size: number) => {
    switch (size) {
      case 10: return '8.00';
      case 12: return '10.00';
      case 14: return '12.00';
      default: return '10.00';
    }
  };

  useEffect(() => {
    console.log(size);
  });

  return (
    <IonPage className="choose-size-page">
      <IonContent fullscreen>
        <NavBar pageName="choose-size" leftButtonType="back" />

        <section className="first-background">
          <div className="title">Create Your Pizza</div>
          <div className="components">Size, Crust, Toppings</div>
          <div className="price">${getPrice(size)}</div>

          <div className={`pizza ${getSizeName(size)}`}>
            <div className="blurry-background"></div>
            <div className="background"></div>
            <div className="image"></div>
          </div>
        </section>

        <section className={`outlined-background ${getSizeName(size)}`}>
          <div className="background">
            <span className="text">{size}''</span>
          </div>
        </section>

        <section className="options">
          <div className="title">Choose your <strong>size</strong></div>

          <section className="buttons">
            <div className="button">
              <input type="radio" name="pizza-size" value="small" id="pizza-size-small" onClick={() => setSize(10)} />

              <label htmlFor="pizza-size-small">
                <div className="background"></div>
                <span>Small</span>
              </label>
            </div>

            <div className="button">
              <input type="radio" name="pizza-size" value="medium" id="pizza-size-medium" onClick={() => setSize(12)} />

              <label htmlFor="pizza-size-medium">
                <div className="background"></div>
                <span>Medium</span>
              </label>
            </div>

            <div className="button">
              <input type="radio" name="pizza-size" value="large" id="pizza-size-large" onClick={() => setSize(14)} />

              <label htmlFor="pizza-size-large">
                <div className="background"></div>
                <span>Large</span>
              </label>
            </div>
          </section>
        </section>

        <section className="footer">
          <button>Next</button>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseSize;
