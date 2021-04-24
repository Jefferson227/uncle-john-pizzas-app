import './CurrentLocationIcon.css';
import CurrentLocationCenterIcon from '../../assets/img/current-location-center-icon.svg';
import CurrentLocationOutlineIcon from '../../assets/img/current-location-outline-icon.svg';
import { IonIcon } from '@ionic/react';

const CurrentLocationIcon: React.FC = () => {
  return (
    <div className="current-location-icon-container">
      <IonIcon className="current-location-icon current-location-icon-center" src={CurrentLocationCenterIcon}></IonIcon>
      <IonIcon className="current-location-icon current-location-icon-outline" src={CurrentLocationOutlineIcon}></IonIcon>
    </div>
  )
};

export default CurrentLocationIcon;