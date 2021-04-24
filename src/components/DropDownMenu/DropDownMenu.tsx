import { IonContent, IonList, IonItem } from '@ionic/react';
import './DropDownMenu.css';

interface DropDownMenuProps {
  labelId: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({labelId}) => (
  <section>
    <input type="checkbox" id={labelId} className="dropdown-menu-checkbox" />

    <IonContent className="dropdown-menu-content">
      <IonList className="dropdown-menu-list">
        <IonItem className="dropdown-menu-list-item" lines="full">Current Location</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full">Home</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full">Other</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full">Work</IonItem>
        <IonItem className="dropdown-menu-list-item" lines="full">Add a new address</IonItem>
      </IonList>
    </IonContent>
  </section>
);

export default DropDownMenu;
