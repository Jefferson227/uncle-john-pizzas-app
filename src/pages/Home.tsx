import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-padding-top"></div>

        <section className="home-header">
          <div className="home-greeting">Hi Jaykey!</div>

          <div className="home-message">What <strong>pizza</strong> do you want to try today?</div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
