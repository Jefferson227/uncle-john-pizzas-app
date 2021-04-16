import React from 'react';
import './NavBar.css';
import MenuIcon from '../../assets/img/menu-icon.svg';
import BasketIcon from '../../assets/img/basket-icon.svg';
import SideMenu from '../SideMenu/SideMenu';
import { IonHeader, IonToolbar, IonPage, IonMenuButton, IonButtons, IonIcon } from '@ionic/react';

const contentId = "main-content";

const NavBar: React.FC = () => {
  return (
    <div>
      <SideMenu contentId={contentId}/>

      <IonPage id={contentId}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton className="ion-menu-button">
                <IonIcon src={MenuIcon}></IonIcon>
              </IonMenuButton>
            </IonButtons>

            <section className="navbar-center">
              <div className="title">Deliver to:</div>
              <div className="subtitle">Home</div>
            </section>

            <section className="navbar-end">
              <IonIcon src={BasketIcon} className="basket-icon"></IonIcon>
            </section>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </div>
  )
};

export default NavBar;