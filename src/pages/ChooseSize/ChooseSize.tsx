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
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseSize;
