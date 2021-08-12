import React, { useState, useEffect, useMemo } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import IOrder from '../../service/interfaces/IOrder';
import Service from '../../service/service';
import '../../components/CreateYourPizza/CreateYourPizza.css';
import PizzaInfo from '../../components/CreateYourPizza/PizzaInfo';
import RadioButton from '../../components/CreateYourPizza/RadioButton';

const ChooseSize: React.FC = () => {
  const order: IOrder = useMemo(() => {
    return {
      size: '',
      crust: '',
      price: '',
      toppings: []
    };
  }, []);
  const [size, setSize] = useState(12);
  const getSizeName = (size: number) => {
    switch (size) {
      case 10: return 'small';
      case 12: return 'medium';
      case 14: return 'large';
      default: return 'medium';
    }
  };
  const getPrice = (size: number) => {
    switch (size) {
      case 10: return '8.00';
      case 12: return '10.00';
      case 14: return '12.00';
      default: return '10.00';
    }
  };
  const saveOrder = (order: IOrder) => {
    console.log('saveOrder clicked');
    Service.saveOrder(order);
  }

  useEffect(() => {
    order.size = getSizeName(size);
    order.price = getPrice(size);
  }, [order, size]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar pageName="choose-size" leftButtonType="back" />

        <section className="create-your-pizza">
          <PizzaInfo components="size, crust, toppings" price={getPrice(size)} sizeName={getSizeName(size)} size={size} />

          <section className="options">
            <div className="title">Choose your <strong>size</strong></div>

            <section className="buttons">
              <RadioButton name="pizza-size" value="small" id="pizza-size-small" func={() => setSize(10)} checked={size === 10} text="Small" />
              <RadioButton name="pizza-size" value="medium" id="pizza-size-medium" func={() => setSize(12)} checked={size === 12} text="Medium" />
              <RadioButton name="pizza-size" value="large" id="pizza-size-large" func={() => setSize(14)} checked={size === 14} text="Large" />
            </section>
          </section>

          <section className="footer">
            <button onClick={() => saveOrder(order)}>Next</button>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseSize;
