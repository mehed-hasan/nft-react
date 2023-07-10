import { howWork } from "../../data/api";

function InfoCardSection() {
    return ( 
        <section id="info_cards" className=" text-center theme-text-color">
      
      <div className="section_heading ">
        <p className="theme-text-color">How it works</p>
          <h2 className="section_title">
            Create and sell your NFTs
          </h2>
      </div>
      <div className="container">   
        <div className="row">
          {
            howWork.map((item) =>
            <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div className="info_card shadow">
              <div dangerouslySetInnerHTML={{__html: item.image}} >

              </div>
            <h4 className="info_heading">{item.name}</h4>
              <p>
                {item.details}
              </p>
            </div>
          </div>
            
            )
          }
          
        </div>
      </div>
    </section>
     );
}

export default InfoCardSection;