import React from 'react';
import './SideMenu.css';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonPage, IonMenuButton, IonButtons } from '@ionic/react';

interface SideMenuProps {
  contentId: string;
}

const SideMenu: React.FC<SideMenuProps> = ({contentId}) => {
  return (
    <IonMenu side="start" menuId="first" contentId={contentId}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Start Menu</IonTitle>
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