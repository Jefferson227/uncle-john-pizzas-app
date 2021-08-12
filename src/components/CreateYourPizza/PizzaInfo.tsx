interface PizzaInfoProps {
  components: string;
  price: string;
  sizeName: string;
  size?: number;
}

const PizzaInfo: React.FC<PizzaInfoProps> = ({components, price, sizeName, size = ''}) => {
  return (
    <>
      <section className="first-background">
        <div className="title">Create Your Pizza</div>
        <div className="components">{components}</div>
        <div className="price">${price}</div>

        <div className={`pizza ${sizeName}`}>
          <div className="blurry-background"></div>
          <div className="background"></div>
          <div className="image"></div>
        </div>
      </section>

      <section className={`outlined-background ${sizeName}`}>
        <div className="background">
          <span className="text">{size}''</span>
        </div>
      </section>
	  </>
  );
};

export default PizzaInfo;
