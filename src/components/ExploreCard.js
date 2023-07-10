import { Link } from "react-router-dom";

function ExploreCard({data}) {
    return ( 
        <div className="nft_card -50 shadow">
      
                  <div className="nft_image theme-text-color">
                    <Link to="#"><img className="img-fluid thumb" src={require(`../images/banner/${data.image}`)} alt="error" /></Link>
                    <div  className="user_image_box d-flex justify-content-between">
                      <div>
                      {
                    data.bidedBy.map((item)=>
                    <img src={`${require(`../images/icons/${item}`)}`} alt="Error!" />
                    )
                  }
                      <p className="ms-3"> Placed Bid</p>
                      </div>
                      <Link to="#">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill="white"/>
                          <path d="M16 9.5C16.8284 9.5 17.5 8.82843 17.5 8C17.5 7.17157 16.8284 6.5 16 6.5C15.1716 6.5 14.5 7.17157 14.5 8C14.5 8.82843 15.1716 9.5 16 9.5Z" fill="white"/>
                          <path d="M16 25.5C16.8284 25.5 17.5 24.8284 17.5 24C17.5 23.1716 16.8284 22.5 16 22.5C15.1716 22.5 14.5 23.1716 14.5 24C14.5 24.8284 15.1716 25.5 16 25.5Z" fill="white"/>
                          </svg>
                      </Link>
                    </div>
                    <Link to="#" className="product_title theme-text-color">Autumn Art Concept</Link>
                    <div className="price_box d-flex justify-content-between">
                      <p className=""><b>50. 50 ETH</b></p>
    
                    </div>
                    <Link className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>
    
                  </div>
                </div>
     );
}

export default ExploreCard;