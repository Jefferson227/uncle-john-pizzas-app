import './LogOutIcon.css';
import LogOutIcon1 from '../../assets/img/logout-icon-1.svg';
import LogOutIcon2 from '../../assets/img/logout-icon-2.svg';
import { IonIcon } from '@ionic/react';

const LogOutIcon: React.FC = () => {
  return (
    <div className="logout-icon-container">
      <IonIcon className="logout-icon logout-icon-part-1" src={LogOutIcon1}></IonIcon>
      <IonIcon className="logout-icon logout-icon-part-2" src={LogOutIcon2}></IonIcon>
    </div>
  )
};

export default LogOutIcon;