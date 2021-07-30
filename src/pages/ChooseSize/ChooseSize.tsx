import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import './ChooseSize.css';

const ChooseSize: React.FC = () => {
  return (
    <IonPage className="choose-size-page">
      <IonContent fullscreen>
        <NavBar pageName="choose-size" leftButtonType="back" />

        <section className="first-background">
          <div className="title">Create Your Pizza</div>
          <div className="components">Size, Crust, Toppings</div>
          <div className="price">$10.00</div>

          <div className="pizza">
            <div className="blurry-background"></div>
            <div className="background"></div>
            <div className="image"></div>
          </div>
        </section>

        <section className="outlined-background">
          <div className="background">
            <span className="text">12''</span>
          </div>
        </section>

        <section className="options">
          <div className="title">Choose your <strong>size</strong></div>

          <section className="buttons">
            <div className="button">
              <input type="radio" value="small" id="pizza-size-small" />
              <label htmlFor="pizza-size-small">Small</label>
            </div>

            <div className="button">
              <input type="radio" value="medium" id="pizza-size-medium" />
              <label htmlFor="pizza-size-medium">Medium</label>
            </div>

            <div className="button">
              <input type="radio" value="large" id="pizza-size-large" />
              <label htmlFor="pizza-size-large">Large</label>
            </div>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseSize;
