import { IonApp, IonRouterOutlet } from '@ionic/react';
import './DropDownMenu.css';

interface DropDownMenuProps {
  labelId: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({labelId}) => (
  <section>
    <input type="checkbox" id={labelId} className="dropdown-menu-checkbox" />

    <div className="dropdown-menu-content"></div>
  </section>
);

export default DropDownMenu;
