import React from 'react';
import './NavBar.css';
import MenuIcon from '../../assets/img/menu-icon.svg';
// import ArrowLeftIcon from '../../assets/img/arrow-left-icon.svg';
import BasketIcon from '../../assets/img/basket-icon.svg';
import SideMenu from '../SideMenu/SideMenu';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { IonHeader, IonToolbar, IonPage, IonMenuButton, IonButtons, IonIcon } from '@ionic/react';

const contentId = "main-content";
const dropDownMenuId = "dropdown-menu-addresses";

const NavBar: React.FC = () => {

  return (
    <section className="navbar-container">
      <SideMenu contentId={contentId} />

      <div id={contentId} className="navbar-ion-page">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton className="ion-menu-button">
                <IonIcon src={MenuIcon}></IonIcon>
              </IonMenuButton>
            </IonButtons>

            <label className="navbar-center" htmlFor={dropDownMenuId}>
              <div className="title">Deliver to:</div>
              <div className="subtitle">Home</div>
            </label>

            <section className="navbar-end">
              <IonIcon src={BasketIcon} className="basket-icon"></IonIcon>
            </section>
          </IonToolbar>
        </IonHeader>
      </div>

      <DropDownMenu labelId={dropDownMenuId} />
    </section>
  )
};

export default NavBar;