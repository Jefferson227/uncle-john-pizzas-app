import './AddNewAddressIcon.css';
import Sign from '../../assets/img/plus-button-sign-icon.svg';
import Background from '../../assets/img/plus-button-background-icon.svg';
import { IonIcon } from '@ionic/react';

const AddNewAddressIcon: React.FC = () => {
  return (
    <div className="add-icon-container">
      <IonIcon className="add-icon add-icon-background" src={Background}></IonIcon>
      <IonIcon className="add-icon add-icon-sign" src={Sign}></IonIcon>
    </div>
  )
};

export default AddNewAddressIcon;