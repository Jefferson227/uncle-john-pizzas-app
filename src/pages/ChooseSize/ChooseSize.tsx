import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import './ChooseSize.css';

const ChooseSize: React.FC = () => {
  const [size, setSize] = useState(12);

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
          <div className="price">$10.00</div>

          {
            size === 10
              ? (
                <div className="pizza-small">
                  <div className="blurry-background"></div>
                  <div className="background"></div>
                  <div className="image"></div>
                </div>
              )
              : null
          }

          {
            size === 12
              ? (
                <div className="pizza-medium">
                  <div className="blurry-background"></div>
                  <div className="background"></div>
                  <div className="image"></div>
                </div>
              )
              : null
          }

          {
            size === 14
              ? (
                <div className="pizza-large">
                  <div className="blurry-background"></div>
                  <div className="background"></div>
                  <div className="image"></div>
                </div>
              )
              : null
          }
        </section>

        {
          size === 10
            ? (
              <section className="outlined-background-small">
                <div className="background">
                  <span className="text">{size}''</span>
                </div>
              </section>
            )
            : null
        }

        {
          size === 12
            ? (
              <section className="outlined-background-medium">
                <div className="background">
                  <span className="text">{size}''</span>
                </div>
              </section>
            )
            : null
        }

        {
          size === 14
            ? (
              <section className="outlined-background-large">
                <div className="background">
                  <span className="text">{size}''</span>
                </div>
              </section>
            )
            : null
        }

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
