interface PizzaInfoProps {
  price: string;
  chosenSize?: string;
  sizeName: string;
  size?: number;
  chosenCrust?: string;
  crust?: string;
  crustPrice?: string;
  toppings?: Array<string>;
  displayOutlinedBackground?: boolean;
}

const PizzaInfo: React.FC<PizzaInfoProps> = ({
  price,
  chosenSize = 'size',
  sizeName,
  size = '',
  chosenCrust = 'crust',
  crust = 'thin',
  crustPrice = '',
  toppings = ['toppings'],
  displayOutlinedBackground = true
}) => {
  return (
    <>
      <section className="first-background">
        <div className="title">Create Your Pizza</div>

        <div className="components">
          <span className={chosenSize !== 'size' ? 'white-font' : ''}>{chosenSize}</span>,&nbsp;
          <span className={chosenCrust !== 'crust' ? 'white-font' : ''}>{chosenCrust}</span>,&nbsp;
          <span>{toppings[0]}</span>
        </div>

        <div className="price">${price}</div>

        <div className={`pizza ${sizeName}`}>
          <div className="blurry-background"></div>
          <div className="background"></div>
          <div className={`image ${crust}`}></div>
        </div>
      </section>

      <section className={displayOutlinedBackground ? `outlined-background ${sizeName}` : `outlined-background invisible`}>
        {
          size
            ? <div className='background'>
                <span className="text">{size}</span>
              </div>
            : <div className='background crust-price'>
                <span className="text">+${crustPrice}</span>
              </div>
        }
      </section>
	  </>
  );
};

export default PizzaInfo;
