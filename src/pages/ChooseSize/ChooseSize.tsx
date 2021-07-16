import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import './ChooseSize.css';

const ChooseSize: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar pageName="choose-size" />

        <p className="init">Hi, this is the sketch of the 'choose size' page.</p>
      </IonContent>
    </IonPage>
  );
};

export default ChooseSize;
