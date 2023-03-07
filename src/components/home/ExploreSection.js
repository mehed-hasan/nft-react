import { Link } from "react-router-dom";

function ExploreSection() {
    return ( 
        <section className="explore_section theme-text-color">
      
      <div className="section_heading text-center theme-text-color">
        <p>Auction</p>
          <h2 className="section_title">Explore NFTs</h2>

      </div>


      <div className="container">
        <ul className="nav nav-tabs d-flex gap-2 align-items-center justify-content-center" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active " id="all-cat-tab" data-bs-toggle="tab" data-bs-target="#all-cat-tab-pane" type="button" role="tab" aria-controls="all-cat-tab-pane" aria-selected="true">All Categories</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="at-work-tab" data-bs-toggle="tab" data-bs-target="#at-work-tab-pane" type="button" role="tab" aria-controls="at-work-tab-pane" aria-selected="false">Art Work</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="music-tab" data-bs-toggle="tab" data-bs-target="#music-tab-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Music</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="photography-tab" data-bs-toggle="tab" data-bs-target="#photography-tab-pane" type="button" role="tab" aria-controls="photography-tab-pane" aria-selected="false">Photography</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="sports-tab" data-bs-toggle="tab" data-bs-target="#sports-tab-pane" type="button" role="tab" aria-controls="sports-tab-pane" aria-selected="false">Sports</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link " id="virtual-world-tab" data-bs-toggle="tab" data-bs-target="#virtual-world-tab-pane" type="button" role="tab" aria-controls="virtual-world-tab-pane" aria-selected="false">Virtual World</button>
          </li>

        </ul>

        <div className="gap-48"></div>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="all-cat-tab-pane" role="tabpanel" aria-labelledby="all-cat-tab" tabindex="0">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="nft_card -50 shadow">
      
                  <div className="nft_image theme-text-color">
                    <Link to="pages/explore.html"><img className="img-fluid thumb" src={require("../../images/banner/auction_3.png")} alt="error" /></Link>
                    <div  className="user_image_box d-flex justify-content-between">
                      <div>
                      <img src="../../images/icons/user_pic.png" alt="Error!" />
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
                    <Link to="pages/explore.html" className="product_title theme-text-color">Autumn Art Concept</Link>
                    <div className="price_box d-flex justify-content-between">
                      <p className=""><b>50. 50 ETH</b></p>
    
                    </div>
                    <Link className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>
    
                  </div>
                </div>
              </div>
    
              <div className="col-12 col-md-6 col-lg-3">
                <div className="nft_card -50 shadow">
      
                  <div className="nft_image theme-text-color">
                    <Link to="pages/explore.html"><img className="img-fluid thumb" src={require("../../images/banner/collection_6.png")} alt="error" /></Link>
                    <div  className="user_image_box d-flex justify-content-between">
                      <div>
                      <img src="../../images/icons/user_pic.png" alt="Error!"/>
                      <p className="ms-3"> Placed Bid</p>
                      </div>
                      <Link to="pages/explore.html">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill="white"/>
                          <path d="M16 9.5C16.8284 9.5 17.5 8.82843 17.5 8C17.5 7.17157 16.8284 6.5 16 6.5C15.1716 6.5 14.5 7.17157 14.5 8C14.5 8.82843 15.1716 9.5 16 9.5Z" fill="white"/>
                          <path d="M16 25.5C16.8284 25.5 17.5 24.8284 17.5 24C17.5 23.1716 16.8284 22.5 16 22.5C15.1716 22.5 14.5 23.1716 14.5 24C14.5 24.8284 15.1716 25.5 16 25.5Z" fill="white"/>
                          </svg>
                      </Link>
                    </div>
                    <Link className="product_title theme-text-color">Autumn Art Concept</Link>
                    <div className="price_box d-flex justify-content-between">
                      <p className=""><b>50. 50 ETH</b></p>
    
                    </div>
                    <Link to="#" className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>
    
                  </div>
                </div>
              </div>
    
    
              <div className="col-12 col-md-6 col-lg-3">
                <div className="nft_card -50 shadow">
      
                  <div className="nft_image theme-text-color">
                    <Link to="pages/explore.html"><img className="img-fluid thumb" src={require("../../images/banner/nft_card.png")} alt="error" />
                    </Link>
                    <div  className="user_image_box d-flex justify-content-between">
                      <div>
                      <img src="../../images/icons/user_pic.png" alt="Error!"/>
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
                    <Link to="pages/explore.html" className="product_title theme-text-color">Autumn Art Concept</Link>
                    <div className="price_box d-flex justify-content-between">
                      <p className=""><b>50. 50 ETH</b></p>
    
                    </div>
                    <Link to="#" className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>
    
                  </div>
                </div>
              </div>
    
    
    
              <div className="col-12 col-md-6 col-lg-3">
                <div className="nft_card -50 shadow">
      
                  <div className="nft_image theme-text-color">
                    <Link to="pages/explore.html"><img className="img-fluid thumb" src={require("../../images/banner/auction_4.png")} alt="error" /></Link>
                    <div  className="user_image_box d-flex justify-content-between">
                      <div>
                      <Link to="#"><img src="../../images/icons/user_pic.png" alt="Error!"/></Link>
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
                    <Link to="pages/explore.html" className="product_title theme-text-color">Autumn Art Concept</Link>
                    <div className="price_box d-flex justify-content-between">
                      <p className=""><b>50. 50 ETH</b></p>
    
                    </div>
                    <Link to="#" className="btn theme-text-color them-btn border-gradient   fill-theme-btn mt-5 w-100"> <span>Place Bid</span> </Link>
    
                  </div>
                </div>
              </div>
    
    
          </div>
          </div>
          <div className="tab-pane fade" id="at-work-tab-pane" role="tabpanel" aria-labelledby="at-work-tab" tabindex="0">Opps ! No items found !</div>
          <div className="tab-pane fade" id="music-tab-pane" role="tabpanel" aria-labelledby="music-tab" tabindex="0">Opps ! No items found !</div>
          <div className="tab-pane fade" id="photography-tab-pane" role="tabpanel" aria-labelledby="photography-tab" tabindex="0">Opps ! No items found !</div>
          <div className="tab-pane fade" id="sports-tab-pane" role="tabpanel" aria-labelledby="sports-tab" tabindex="0">Opps ! No items found !</div>
          <div className="tab-pane fade" id="virtual-world-tab-pane" role="tabpanel" aria-labelledby="virtual-world-tab" tabindex="0">Opps ! No items found !</div>
        </div>
        

            </div>
        
        </section>

     );
}

export default ExploreSection;