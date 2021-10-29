import React, { useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar/NavBar';
import IOrder from '../../service/interfaces/IOrder';
import Service from '../../service/service';
import '../../components/CreateYourPizza/CreateYourPizza.css';
import PizzaInfo from '../../components/CreateYourPizza/PizzaInfo';
import PepperoniImg from '../../assets/img/pepperoni-slide-card.png';
import MushroomsImg from '../../assets/img/mushrooms-slide-card.png';
import CheckmarkIcon from '../../assets/img/checkmark-icon.svg';

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

            <section className="slide-cards">
              <div className="card">
                <img src={PepperoniImg} alt="Pepperoni" />

                <div className="container-title">
                  <div className="title">Pepperoni</div>
                  <div className="price">+ $0.00</div>
                </div>

                <div className="checkbox">
                  <input type="checkbox" name="pepperoni" id="pepperoni" />
                  <label htmlFor="pepperoni">
                    <img src={CheckmarkIcon} alt="Checked" />
                  </label>
                </div>
              </div>

              <div className="card">
                <img src={MushroomsImg} alt="Mushrooms" />

                <div className="container-title">
                  <div className="title">Mushrooms</div>
                  <div className="price">+ $0.00</div>
                </div>

                <div className="checkbox">
                  <input type="checkbox" name="mushrooms" id="mushrooms" />
                  <label htmlFor="mushrooms">
                    <img src={CheckmarkIcon} alt="Checked" />
                  </label>
                </div>
              </div>
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

export default ChooseToppings;
