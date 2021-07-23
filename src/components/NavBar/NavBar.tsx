import React from 'react';
import './NavBar.css';
import BasketIcon from '../../assets/img/basket-icon.svg';
import HomeIcon from '../../assets/img/gray-home-icon.svg';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { IonHeader, IonToolbar, IonButtons, IonIcon, useIonRouter } from '@ionic/react';
import LeftButtonNavBar from '../LeftButtonNavBar/LeftButtonNavBar';

interface NavBarProps {
  pageName: string;
  sideMenuContentId?: string;
  leftButtonType: string;
}

const dropDownMenuId = "dropdown-menu-addresses";

const NavBar: React.FC<NavBarProps> = ({pageName, sideMenuContentId = `${pageName}-navbar}`, leftButtonType}) => {
  const router = useIonRouter();

  return (
    <section className="navbar-container">
      <div id={sideMenuContentId} className="navbar-ion-page">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <LeftButtonNavBar type={leftButtonType} />
            </IonButtons>

            {
              pageName === 'home'
                ? (
                  <label className="navbar-center" htmlFor={`${dropDownMenuId}-${pageName}`}>
                    <div className="title">Deliver to:</div>
                    <div className="subtitle">Home</div>
                  </label>
                )
                : (
                  <div className="navbar-center">
                    <div className="title-center">Uncle John Pizzas</div>
                  </div>
                )
            }

            <section className="navbar-end">
              {
                pageName === 'home'
                  ? (<IonIcon src={BasketIcon} />)
                  : (<IonIcon src={HomeIcon} onClick={() => router.push('/', 'root', 'replace')} />)
              }
            </section>
          </IonToolbar>
        </IonHeader>
      </div>

      <DropDownMenu labelId={`${dropDownMenuId}-${pageName}`} />
    </section>
  )
};

export default NavBar;