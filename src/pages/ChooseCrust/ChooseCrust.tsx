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

  useEffect(() => {
    if (!orderHasLoaded) {
      loadOrder();
      setOrderHasLoaded(true);
    }
  }, [orderHasLoaded]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar pageName="choose-size" leftButtonType="back" />

        <section className="create-your-pizza">
          <PizzaInfo price={order.price} sizeName={order.size} chosenSize={order.size} crustPrice="2.00" />

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
