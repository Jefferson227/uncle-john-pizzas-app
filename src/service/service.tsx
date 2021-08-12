import IOrder from "./interfaces/IOrder";

const Service = {
  saveOrder: (order: IOrder) => {
    const strOrder = JSON.stringify(order);
    localStorage.setItem('order', strOrder);

    console.log('order saved');
  },
  loadOrder: () => {
    const strOrder = localStorage.getItem('order') ?? '';
    if (strOrder) console.log('order retrieved');

    return JSON.parse(strOrder);
  }
};

export default Service;