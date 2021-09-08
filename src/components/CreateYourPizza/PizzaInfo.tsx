interface PizzaInfoProps {
  price: string;
  chosenSize?: string;
  sizeName: string;
  size?: number;
  crust?: string;
  crustPrice?: string;
  toppings?: Array<string>;
}

const PizzaInfo: React.FC<PizzaInfoProps> = ({
  price,
  chosenSize = 'size',
  sizeName,
  size = '',
  crust = 'crust',
  crustPrice = '',
  toppings = ['toppings']
}) => {
  return (
    <>
      <section className="first-background">
        <div className="title">Create Your Pizza</div>

        <div className="components">
          <span className={chosenSize !== 'size' ? 'white-font' : ''}>{chosenSize}</span>,&nbsp;
          <span>{crust}</span>,&nbsp;
          <span>{toppings[0]}</span>
        </div>

        <div className="price">${price}</div>

        <div className={`pizza ${sizeName}`}>
          <div className="blurry-background"></div>
          <div className="background"></div>
          <div className="image"></div>
        </div>
      </section>

      <section className={`outlined-background ${sizeName}`}>
        <div className={`background ${!size ? 'crust-price' : ''}`}>
          <span className="text">{size ? `${size}''` : `+$${crustPrice}`}</span>
        </div>
      </section>
	  </>
  );
};

export default PizzaInfo;
