import React from 'react';
import MenuIcon from '../../assets/img/menu-icon.svg';
import ArrowLeftIcon from '../../assets/img/arrow-left-icon.svg';
import { IonMenuButton, IonIcon, IonBackButton } from '@ionic/react';
import './LeftButtonNavBar.css';

interface LeftButtonNavBarProps {
  type: string;
}

const LeftButtonNavBar: React.FC<LeftButtonNavBarProps> = ({type}) => {
  if (type === 'menu')
    return (
      <IonMenuButton className="ion-navbar-button">
        <IonIcon src={MenuIcon}></IonIcon>
      </IonMenuButton>
    );

  if (type === 'back')
    return (
      <IonBackButton className="ion-navbar-button ion-back-button" defaultHref="/">
        <IonIcon src={ArrowLeftIcon}></IonIcon>
      </IonBackButton>
    );

  return (
    <IonMenuButton className="ion-navbar-button">
      <IonIcon src={MenuIcon}></IonIcon>
    </IonMenuButton>
  );
};

export default LeftButtonNavBar;