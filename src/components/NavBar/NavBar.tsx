import React from 'react';
import './NavBar.css';
import SideMenu from '../SideMenu/SideMenu';
import { IonHeader, IonToolbar, IonTitle, IonPage, IonMenuButton, IonButtons } from '@ionic/react';

const contentId = "main-content";

const NavBar: React.FC = () => {
  return (
    <div>
      <SideMenu contentId={contentId}/>

      <IonPage id={contentId}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle><span className="title">Title</span></IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </div>
  )
};

export default NavBar;