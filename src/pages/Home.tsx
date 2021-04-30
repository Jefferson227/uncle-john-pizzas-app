import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import ThinCrustPizzaPhoto from '../assets/img/thin-crust-pizza-photo.png';

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
          <img src={ThinCrustPizzaPhoto} alt="Thin Crust Pizza"/>

          <div className="home-reorder-title">Order again?</div>

          <div className="home-reorder-ingredients">Small, Thin Crust, Tomatoes, Basil, Cheese</div>

          <div className="home-reorder-price">$12</div>

          <button className="home-add-to-cart-button">Add To Cart</button>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
