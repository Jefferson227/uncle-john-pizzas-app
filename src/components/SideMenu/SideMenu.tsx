import React from 'react';
import './SideMenu.css';
import SideMenuPhoto from '../../assets/img/sidemenu-header-photo.png';
import { IonMenu, IonHeader, IonToolbar, IonContent, IonList, IonItem, IonIcon } from '@ionic/react';
import ProfileIcon from '../../assets/img/profile-icon.svg';
import PaymentMethodIcon from '../../assets/img/payment-method-icon.svg';
import OrderHistoryIcon from '../../assets/img/order-history-icon.svg';
import AddressesIcon from '../../assets/img/addresses-icon.svg';
import HelpCenterIcon from '../../assets/img/help-center-icon.svg';
import SettingsIcon from '../../assets/img/settings-icon.svg';
import LogOutIcon from '../LogOutIcon/LogOutIcon';

interface SideMenuProps {
  contentId: string;
}

const SideMenu: React.FC<SideMenuProps> = ({contentId}) => {
  return (
    <IonMenu side="start" menuId="first" contentId={contentId} className="sidemenu-ion-menu">
      <IonHeader className="sidemenu-ion-header">
        <IonToolbar>
          <div className="sidemenu-header">
            <div className="sidemenu-photo"><img className="sidemenu-profile-pic" src={SideMenuPhoto} /></div>
            <div className="sidemenu-name">Jaykey Del Mar</div>
            <div className="sidemenu-email">janedone@gmail.com</div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="sidemenu-content sidemenu-content-1">
        <IonList className="sidemenu-list">
          <IonItem className="sidemenu-list-item" lines="none">
            <IonIcon src={ProfileIcon}></IonIcon>
            <span className="sidemenu-item-text">Profile</span>
          </IonItem>

          <IonItem className="sidemenu-list-item" lines="none">
            <IonIcon src={PaymentMethodIcon}></IonIcon>
            <span className="sidemenu-item-text">Payment Method</span>
          </IonItem>

          <IonItem className="sidemenu-list-item" lines="none">
            <IonIcon src={OrderHistoryIcon}></IonIcon>
            <span className="sidemenu-item-text">Order History</span>
          </IonItem>

          <IonItem className="sidemenu-list-item" lines="none">
            <IonIcon src={AddressesIcon}></IonIcon>
            <span className="sidemenu-item-text">Addresses</span>
          </IonItem>

          <IonItem className="sidemenu-list-item" lines="none">
            <IonIcon src={HelpCenterIcon}></IonIcon>
            <span className="sidemenu-item-text">Help Center</span>
          </IonItem>
        </IonList>
      </IonContent>

      <IonContent className="sidemenu-content sidemenu-content-2">
        <IonList className="sidemenu-list">
          <IonItem className="sidemenu-list-item" lines="none">
            <IonIcon src={SettingsIcon}></IonIcon>
            <span className="sidemenu-item-text">Settings</span>
          </IonItem>

          <IonItem className="sidemenu-list-item" lines="none">
            {/* <IonIcon src={LogOutIcon1}></IonIcon>
            <IonIcon src={LogOutIcon2}></IonIcon> */}
            <LogOutIcon />
            <span className="sidemenu-item-text">Log out</span>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
};

export default SideMenu;