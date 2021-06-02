import { IonContent, IonList, IonItem, IonIcon } from '@ionic/react';
import './DropDownMenu.css';
import CurrentLocationIcon from '../CurrentLocationIcon/CurrentLocationIcon';
import HomeIcon from '../../assets/img/home-icon.svg';
import LocationIcon from '../../assets/img/location-icon.svg';
import WorkIcon from '../../assets/img/work-icon.svg';
import AddNewAddressIcon from '../AddNewAddressIcon/AddNewAddressIcon';

interface DropDownMenuProps {
  labelId: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({labelId}) => {
  return (
    <section>
      <input type="checkbox" id={labelId} className="dropdown-menu-checkbox" />

      <label className="dropdown-menu-backdrop" htmlFor={labelId}></label>

      <IonContent className="dropdown-menu-content">
        <IonList className="dropdown-menu-list">
          <IonItem className="dropdown-menu-list-item" lines="full">
            <CurrentLocationIcon />

            <section className="dropdown-menu-title-group">
              <div className="dropdown-menu-title">Current Location</div>
            </section>
          </IonItem>

          <IonItem className="dropdown-menu-list-item" lines="full">
            <IonIcon className="dropdown-menu-icon" src={HomeIcon}></IonIcon>

            <section className="dropdown-menu-title-group">
              <div className="dropdown-menu-title">Home</div>
              <div className="dropdown-menu-subtitle">3728 Brand Road, Swift Current</div>
            </section>
          </IonItem>

          <IonItem className="dropdown-menu-list-item" lines="full">
            <IonIcon className="dropdown-menu-icon" src={LocationIcon}></IonIcon>

            <section className="dropdown-menu-title-group">
              <div className="dropdown-menu-title">Other</div>
              <div className="dropdown-menu-subtitle">81 Springside, Lancaster</div>
            </section>
          </IonItem>

          <IonItem className="dropdown-menu-list-item" lines="full">
            <IonIcon className="dropdown-menu-icon" src={WorkIcon}></IonIcon>

            <section className="dropdown-menu-title-group">
              <div className="dropdown-menu-title">Work</div>
              <div className="dropdown-menu-subtitle">4932 Sixth Street, Westminster</div>
            </section>
          </IonItem>

          <IonItem className="dropdown-menu-list-item" lines="full">
            <AddNewAddressIcon />

            <section className="dropdown-menu-title-group">
              <div className="dropdown-menu-title title-orange">Add a new address</div>
            </section>
          </IonItem>
        </IonList>
      </IonContent>
    </section>
  )
};

export default DropDownMenu;
