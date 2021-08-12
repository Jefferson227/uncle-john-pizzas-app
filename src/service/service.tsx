import IOrder from "./interfaces/IOrder";

const Service = {
  saveOrder: (order: IOrder) => {
    const strOrder = JSON.stringify(order);
    localStorage.setItem('order', strOrder);
  },
  loadOrder: (): IOrder => {
    const strOrder = localStorage.getItem('order') ?? '';
    return JSON.parse(strOrder);
  }
};

export default Service;