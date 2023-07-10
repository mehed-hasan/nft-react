import { Link } from "react-router-dom";

function PopularCard({data}) {
    return ( 
      <div style={{backgroundImage:`url(${require(`../images/banner/${data.image}`)})`}} className=" collection_box">
      <Link to="#">
        <div className="overlay d-flex flex-column justify-content-end  p-4 ">
          <h4 className="collectio_card_title">{data.name}</h4>
          <p className="item_info">{data.itemNumber} {data.itemNumber > 1 ? "items":'item'}</p>
        </div>
      </Link>
    </div>
     );
}

export default PopularCard;