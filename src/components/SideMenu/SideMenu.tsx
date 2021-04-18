import React from 'react';
import './SideMenu.css';
import sideMenuPhoto from '../../assets/img/sidemenu-header-photo.png';
import { IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem } from '@ionic/react';

interface SideMenuProps {
  contentId: string;
}

const SideMenu: React.FC<SideMenuProps> = ({contentId}) => {
  return (
    <IonMenu side="start" menuId="first" contentId={contentId}>
      <IonHeader>
        <IonToolbar>
          <div className="sidemenu-header">
            <div className="sidemenu-photo"><img className="sidemenu-profile-pic" src={sideMenuPhoto} /></div>
            <div className="sidemenu-name">Jaykey Del Mar</div>
            <div className="sidemenu-email">janedone@gmail.com</div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default SideMenu;