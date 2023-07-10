import { Link } from "react-router-dom";
import { PopularCollection } from "../../data/api";
import PopularCard from "../PopularCard";

function PopularCollectionSection() {
    return ( 
        <section className="popular_collection ">
      
        <div className="section_heading text-center theme-text-color">
          <p>Collection</p>
            <h2 className="section_title">
              Popular Collection
            </h2>
  
        </div>
  
        <div className="container">
          <div className="row ">
            {
              PopularCollection.map((item, index)=>
              <div  className={`col-12 ${index % 3 === 0 ? 'col-md-6 ':'col-md-3 '} ${3 % index === 0 ? 'order-1 order-md-2 ':''}  mt-4    mb-lg-0`} >
                <PopularCard data={item} />
              </div>
              )
            }

          </div>
        </div>
  
        
      </section>
     );
}

export default PopularCollectionSection;