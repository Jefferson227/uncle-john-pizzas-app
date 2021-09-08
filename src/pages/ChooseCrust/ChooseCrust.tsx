import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import IOrder from '../../service/interfaces/IOrder';
import Service from '../../service/service';
import '../../components/CreateYourPizza/CreateYourPizza.css';
import PizzaInfo from '../../components/CreateYourPizza/PizzaInfo';
import RadioButton from '../../components/CreateYourPizza/RadioButton';

const ChooseCrust: React.FC = () => {
  const loadOrder = () => {
    setOrder(Service.loadOrder());
  }
  const [orderHasLoaded, setOrderHasLoaded] = useState(false);
  const [order, setOrder] = useState<IOrder>({
      size: '',
      crust: '',
      price: '',
      toppings: []
  });
  const [crust, setCrust] = useState('thin');
  const getCrustPrice = (crust: string) => {
    switch (crust) {
      case 'thin': return '2.00'
      case 'thick': return '4.00'
      default: return '2.00'
    }
  }

  useEffect(() => {
    if (!orderHasLoaded) {
      loadOrder();
      setOrderHasLoaded(true);
    }

    order.crust = crust;
  }, [orderHasLoaded, crust, order]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar pageName="choose-size" leftButtonType="back" />

        <section className="create-your-pizza">
          <PizzaInfo price={order.price} sizeName={order.size} chosenSize={order.size} crust={crust} crustPrice={getCrustPrice(crust)} />

          <section className="options">
            <div className="title">Choose your <strong>crust</strong></div>

            <section className="buttons">
              <RadioButton name="crust-type" value="thin" id="crust-type-thin" func={() => setCrust('thin')} checked={crust === 'thin'} text="Thin" />
              <RadioButton name="crust-type" value="thick" id="crust-type-thick" func={() => setCrust('thick')} checked={crust === 'thick'} text="Thick" />
            </section>
          </section>

          <section className="footer">
            <button>Next</button>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseCrust;
