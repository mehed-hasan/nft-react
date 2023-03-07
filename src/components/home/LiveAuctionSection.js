import { Link } from "react-router-dom";

function LiveAuctionSection() {
    return ( 
        <section id="live_auction">
      <div className="section_heading text-center theme-text-color">
        <p>Auction</p>
          <h2 className="section_title">Live Auctions</h2>
      </div>


      <div className="container">

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="nft_card -50 shadow">
              <div className="shrink"></div>

              <div className="nft_counter text-center theme-text-color ">
                <p>Time Remaining</p>
                <h4>15D : 23H : 45M : 40S</h4>
              </div>
  
              <div className="nft_image theme-text-color">
                <Link to="pages/auction_details.html"><img className="img-fluid thumb" src={require("../../images/banner/nft_card.png")} alt="error" /></Link>
                <div  className="user_image_box d-flex justify-content-between">
                  <div>
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <p className="ms-3"> Placed Bid</p>
                  </div>
                  <Link to="pages/auction_details.html">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill="white"/>
                      <path d="M16 9.5C16.8284 9.5 17.5 8.82843 17.5 8C17.5 7.17157 16.8284 6.5 16 6.5C15.1716 6.5 14.5 7.17157 14.5 8C14.5 8.82843 15.1716 9.5 16 9.5Z" fill="white"/>
                      <path d="M16 25.5C16.8284 25.5 17.5 24.8284 17.5 24C17.5 23.1716 16.8284 22.5 16 22.5C15.1716 22.5 14.5 23.1716 14.5 24C14.5 24.8284 15.1716 25.5 16 25.5Z" fill="white"/>
                      </svg>
                  </Link>
                </div>
                <Link to="#" className="product_title theme-text-color">Autumn Art Concept</Link>
                <p>Highest bid 1/12</p>
                <div className="price_box d-flex justify-content-between">
                  <p className=""><b>50. 50 ETH</b></p>
                  <p className="price">322 <span>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.25C10 17.25 0.625 12 0.625 5.62501C0.625 4.49803 1.01546 3.40585 1.72996 2.53431C2.44445 1.66277 3.43884 1.0657 4.54393 0.844677C5.64903 0.623658 6.79657 0.792346 7.79131 1.32204C8.78605 1.85174 9.56655 2.70972 10 3.75001C10.4335 2.70972 11.2139 1.85174 12.2087 1.32204C13.2034 0.792346 14.351 0.623658 15.4561 0.844677C16.5612 1.0657 17.5555 1.66277 18.27 2.53431C18.9845 3.40585 19.375 4.49803 19.375 5.62501C19.375 12 10 17.25 10 17.25Z" fill="white"/>
                      </svg>
                      
                  </span></p>
                </div>
                <Link to="#" className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>

              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="nft_card -50 shadow">
              <div className="shrink"></div>

              <div className="nft_counter text-center theme-text-color ">
                <p >Time Remaining</p>
                <h4>15D : 23H : 45M : 40S</h4>
              </div>
  
              <div className="nft_image theme-text-color">
                <Link to="pages/auction_details.html"><img className="img-fluid thumb" src={require("../../images/banner/aution.png")} alt="error" /></Link>
                <div  className="user_image_box d-flex justify-content-between">
                  <div>
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
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
                <Link to="pages/auction_details.html" className="product_title theme-text-color">Autumn Art Concept</Link>
                <p>Highest bid 1/12</p>
                <div className="price_box d-flex justify-content-between">
                  <p className=""><b>50. 50 ETH</b></p>
                  <p className="price">322 <span>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.25C10 17.25 0.625 12 0.625 5.62501C0.625 4.49803 1.01546 3.40585 1.72996 2.53431C2.44445 1.66277 3.43884 1.0657 4.54393 0.844677C5.64903 0.623658 6.79657 0.792346 7.79131 1.32204C8.78605 1.85174 9.56655 2.70972 10 3.75001C10.4335 2.70972 11.2139 1.85174 12.2087 1.32204C13.2034 0.792346 14.351 0.623658 15.4561 0.844677C16.5612 1.0657 17.5555 1.66277 18.27 2.53431C18.9845 3.40585 19.375 4.49803 19.375 5.62501C19.375 12 10 17.25 10 17.25Z" fill="white"/>
                      </svg>
                      
                  </span></p>
                </div>
                <Link to="#" className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>
              </div>
            </div>
          </div>



          <div className="col-12 col-md-6 col-lg-4">
            <div className="nft_card -50 shadow">
              <div className="shrink"></div>

              <div className="nft_counter text-center theme-text-color ">
                <p>Time Remaining</p>
                <h4>15D : 23H : 45M : 40S</h4>
              </div>
  
              <div className="nft_image theme-text-color">
                <Link to="pages/auction_details.html"><img className="img-fluid thumb" src={require("../../images/banner/auction_2.png")} alt="error" /></Link>
                <div  className="user_image_box d-flex justify-content-between">
                  <div>
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
                  <img src={require("../../images/icons/user_pic.png")} alt="Error!" />
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
                <Link to="pages/auction_details.html" className="product_title theme-text-color">Autumn Art Concept</Link>
                <p>Highest bid 1/12</p>
                <div className="price_box d-flex justify-content-between">
                  <p className=""><b>50. 50 ETH</b></p>
                  <p className="price">322 <span>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.25C10 17.25 0.625 12 0.625 5.62501C0.625 4.49803 1.01546 3.40585 1.72996 2.53431C2.44445 1.66277 3.43884 1.0657 4.54393 0.844677C5.64903 0.623658 6.79657 0.792346 7.79131 1.32204C8.78605 1.85174 9.56655 2.70972 10 3.75001C10.4335 2.70972 11.2139 1.85174 12.2087 1.32204C13.2034 0.792346 14.351 0.623658 15.4561 0.844677C16.5612 1.0657 17.5555 1.66277 18.27 2.53431C18.9845 3.40585 19.375 4.49803 19.375 5.62501C19.375 12 10 17.25 10 17.25Z" fill="white"/>
                      </svg>
                      
                  </span></p>
                </div>
                <Link to="#" className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>

              </div>
            </div>
          </div>
      </div>
      </div>
    </section>

     );
}

export default LiveAuctionSection;