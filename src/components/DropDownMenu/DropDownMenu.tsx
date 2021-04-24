import { IonContent, IonList, IonItem, IonIcon } from '@ionic/react';
import './DropDownMenu.css';
import CurrentLocationIcon from '../CurrentLocationIcon/CurrentLocationIcon';
import HomeIcon from '../../assets/img/home-icon.svg';
import LocationIcon from '../../assets/img/location-icon.svg';
import WorkIcon from '../../assets/img/work-icon.svg';
import AddNewAddressIcon from '../AddNewAddressIcon/AddNewAddressIcon';

interface DropDownMenuProps {
  labelId: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({labelId}) => (
  <section>
    <input type="checkbox" id={labelId} className="dropdown-menu-checkbox" />

    <IonContent className="dropdown-menu-content">
      <IonList className="dropdown-menu-list">
        <IonItem className="dropdown-menu-list-item" lines="full"><CurrentLocationIcon /> Current Location</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full"><IonIcon className="dropdown-menu-icon" src={HomeIcon}></IonIcon> Home</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full"><IonIcon className="dropdown-menu-icon" src={LocationIcon}></IonIcon> Other</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full"><IonIcon className="dropdown-menu-icon" src={WorkIcon}></IonIcon> Work</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full"><AddNewAddressIcon /> Add a new address</IonItem>
      </IonList>
    </IonContent>
  </section>
);

export default DropDownMenu;
