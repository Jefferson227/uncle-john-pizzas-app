import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import ThinCrustPizzaPhoto from '../assets/img/thin-crust-pizza-photo.png';
import ThickCrustPizzaPhoto from '../assets/img/thick-crust-pizza-photo.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-padding-top"></div>

        <section className="home-header">
          <div className="home-greeting">Hi Jaykey!</div>

          <div className="home-message">What <strong>pizza</strong> do you want to try today?</div>
        </section>

        <section className="home-reorder-container">
          <div className="home-reorder-container-left">
            <img src={ThinCrustPizzaPhoto} className="home-reorder-pizza-image" alt="Thin Crust Pizza"/>
          </div>

          <div className="home-reorder-container-right">
            <div className="home-reorder-title">Order again?</div>

            <div className="home-reorder-ingredients">Small, Thin Crust, Tomatoes, Basil, Cheese</div>

            <div className="home-reorder-price">$12</div>

            <button className="home-add-to-cart-button">Add To Cart</button>
          </div>
        </section>

        <section className="home-create-pizza-container">
          <div className="home-create-pizza-header">
            <div className="home-create-pizza-title">Create your <strong>own pizza</strong></div>

            <div className="home-create-pizza-subtitle">The cost will depend on your customization</div>
          </div>

          <div className="home-create-pizza-image-container">
            <img src={ThickCrustPizzaPhoto} className="home-create-pizza-image" alt="Thick Crust Pizza"/>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
