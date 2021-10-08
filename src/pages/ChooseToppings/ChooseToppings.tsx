import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import IOrder from '../../service/interfaces/IOrder';
import Service from '../../service/service';
import '../../components/CreateYourPizza/CreateYourPizza.css';
import PizzaInfo from '../../components/CreateYourPizza/PizzaInfo';

const ChooseToppings: React.FC = () => {
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
          <PizzaInfo price={order.price} sizeName={order.size} chosenSize={order.size} chosenCrust={order.crust} displayOutlinedBackground={false} />

          <section className="options toppings">
            <div className="title">Choose up to <strong>7 toppings</strong></div>
            <div className="subtitle">free 3 add-ons</div>

            {/* <section className="buttons">
              <RadioButton name="crust-type" value="thin" id="crust-type-thin" func={() => setCrust('thin')} checked={crust === 'thin'} text="Thin" />
              <RadioButton name="crust-type" value="thick" id="crust-type-thick" func={() => setCrust('thick')} checked={crust === 'thick'} text="Thick" />
            </section> */}
          </section>

          <section className="footer">
            <button>Next</button>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default ChooseToppings;
