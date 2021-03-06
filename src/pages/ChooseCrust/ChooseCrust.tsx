import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import IOrder from '../../service/interfaces/IOrder';
import Service from '../../service/service';
import '../../components/CreateYourPizza/CreateYourPizza.css';
import PizzaInfo from '../../components/CreateYourPizza/PizzaInfo';
import RadioButton from '../../components/CreateYourPizza/RadioButton';

const ChooseCrust: React.FC = () => {
  const router = useIonRouter();
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
  const [orderPrice, setOrderPrice] = useState('0.00');
  const getOrderPrice = (strOrderPrice: string, strCrustPrice: string) => {
    const orderPrice = parseFloat(strOrderPrice);
    const crustPrice = parseFloat(strCrustPrice);

    return (orderPrice + crustPrice).toFixed(2).toString();
  }
  const goToNextPage = (order: IOrder) => {
    order.price = orderPrice;
    Service.saveOrder(order);
    router.push('/choose-toppings');
  };

  useEffect(() => {
    if (!orderHasLoaded) {
      loadOrder();
      setOrderHasLoaded(true);
    }

    order.crust = crust;
    setOrderPrice(getOrderPrice(order.price, getCrustPrice(crust)));
  }, [orderHasLoaded, crust, order]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <NavBar pageName="choose-size" leftButtonType="back" />

        <section className="create-your-pizza">
          <PizzaInfo price={orderPrice} sizeName={order.size} chosenSize={order.size} crust={crust} crustPrice={getCrustPrice(crust)} />

          <section className="options">
            <div className="title">Choose your <strong>crust</strong></div>

            <section className="buttons">
              <RadioButton name="crust-type" value="thin" id="crust-type-thin" func={() => setCrust('thin')} checked={crust === 'thin'} text="Thin" />
              <RadioButton name="crust-type" value="thick" id="crust-type-thick" func={() => setCrust('thick')} checked={crust === 'thick'} text="Thick" />
            </section>
          </section>

          <section className="footer">
            <button onClick={() => goToNextPage(order)}>Next</button>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseCrust;
