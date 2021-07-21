import React from 'react';
import './NavBar.css';
import MenuIcon from '../../assets/img/menu-icon.svg';
// import ArrowLeftIcon from '../../assets/img/arrow-left-icon.svg';
import BasketIcon from '../../assets/img/basket-icon.svg';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { IonHeader, IonToolbar, IonMenuButton, IonButtons, IonIcon } from '@ionic/react';

interface NavBarProps {
  pageName: string;
  sideMenuContentId?: string;
}

const dropDownMenuId = "dropdown-menu-addresses";

const NavBar: React.FC<NavBarProps> = ({pageName, sideMenuContentId = `${pageName}-navbar`}) => {

  return (
    <section className="navbar-container">
      <div id={sideMenuContentId} className="navbar-ion-page">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton className="ion-menu-button">
                <IonIcon src={MenuIcon}></IonIcon>
              </IonMenuButton>
            </IonButtons>

            <label className="navbar-center" htmlFor={`${dropDownMenuId}-${pageName}`}>
              <div className="title">Deliver to:</div>
              <div className="subtitle">Home</div>
            </label>

            <section className="navbar-end">
              <IonIcon src={BasketIcon} className="basket-icon"></IonIcon>
            </section>
          </IonToolbar>
        </IonHeader>
      </div>

      <DropDownMenu labelId={`${dropDownMenuId}-${pageName}`} />
    </section>
  )
};

export default NavBar;