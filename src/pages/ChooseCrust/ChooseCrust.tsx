import React, { useState, useEffect, useMemo } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import IOrder from '../../service/interfaces/IOrder';
import Service from '../../service/service';
import '../../components/CreateYourPizza/CreateYourPizza.css';
import PizzaInfo from '../../components/CreateYourPizza/PizzaInfo';
import RadioButton from '../../components/CreateYourPizza/RadioButton';

const ChooseCrust: React.FC = () => {
  let order: IOrder = useMemo(() => {
    return {
      size: '',
      crust: '',
      price: '',
      toppings: []
    };
  }, []);
  const loadOrder = () => {
    console.log('loadOrder clicked');
    return Service.loadOrder();
  }
  const [orderHasLoaded, setOrderHasLoaded] = useState(false);

  useEffect(() => {
    if (!orderHasLoaded) {
      order = loadOrder();
      setOrderHasLoaded(true);
      console.log('order has loaded');
    }
  }, [order]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar pageName="choose-size" leftButtonType="back" />

        <section className="create-your-pizza">
          <PizzaInfo components="size, crust, toppings" price={order.price} sizeName={order.size} />

          {/* <section className="options">
            <div className="title">Choose your <strong>size</strong></div>

            <section className="buttons">
              <RadioButton name="pizza-size" value="small" id="pizza-size-small" func={() => setSize(10)} checked={size === 10} text="Small" />
              <RadioButton name="pizza-size" value="medium" id="pizza-size-medium" func={() => setSize(12)} checked={size === 12} text="Medium" />
              <RadioButton name="pizza-size" value="large" id="pizza-size-large" func={() => setSize(14)} checked={size === 14} text="Large" />
            </section>
          </section> */}

          <section className="footer">
            <button>Next</button>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseCrust;
