import "./Product.css";
import photo from "./../photo.jpg";
const Product = () => {
  return (
    <div className="product">
      <div className="imgparents">
        <img className="picture" src={photo} alt="" />
      </div>

      <div className="information">
        <div className="key">Dishoom</div>
        <div className="key"> rating:4.5</div>
        <div className="key"> Price:$$</div>
        <div className="key">Category:Indian</div>
        <div className="key">Addresh:12 Upper Saint </div>
        <div className="key"> Marrtin's Lane Londen WC2H9FB</div>
        <button className="checkbox"> Check it out</button>
      </div>
    </div>
  );
};
export default Product;
