import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AuctionCard from "../../components/AuctionCard";
import { liveAcution } from "../../data/api";
import '../../styles/live_auction.css';

function AuctionDetails() {

    useEffect(() => {
        window.scrollTo(0,0);
      });

    const { id } = useParams();
    const data = liveAcution.find((item) => {return id === item.id});
    console.log(data);
    
    return ( 
        <>
   
   <section id="work_section" className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="work_section_image">
                            <img className="img-fluid" src={require(`../../images/banner/bitcoinGold.png`)} alt="error"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="work_details theme-text-color">
                            <h4 className="section_title">Autumn Art Work Concept </h4>
                            <p>Details: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="author_info d-flex align-items-center justify-content-between p-3">
                                <div className="pulished">
                                <i><h6>Published</h6></i>
                                <i><p>20 Oct 2022</p></i>
                                </div>

                                <div className="d-flex gap-5 seller_and_buyer_info">
                                    <div>
                                        <i><b><h6>Created By :</h6></b></i>
                                        <p className="d-flex gap-2 align-items-center"> <img className="img-fluid" src={require(`../../images/creators/c2.png`)} alt="error"/>
<i>Mark Wood</i></p>
                                    </div>
                                    <div className="border"></div>
                                    <div>
                                        <i><b><h6>Owned By  :</h6></b></i>
                                        <p className="d-flex gap-2 align-items-center">
                                        <img className="img-fluid" src={require(`../../images/creators/c4.png`)} alt="error"/>

                                             <i>Jack Tadia</i></p>
                                    </div>

                                </div>
                            </div>
                            <div className="author_info pulished p-3">
                                <i><h6>Highest Price</h6></i>
                                <i><p>0.008 ETH </p></i>
                                </div>
                        </div>

                        <div className="button-group d-flex justify-content-between">
                            <Link style={{minWidth:'213px'}} className="btn border-theme-btn"><span> Place Bid</span></Link>

                            <div className="d-flex gap-4">
                                <Link  className="btn border-theme-btn"> <span>322</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.375 20.5C12.375 20.5 3 15.25 3 8.87501C3 7.74803 3.39046 6.65585 4.10496 5.78431C4.81945 4.91277 5.81384 4.3157 6.91893 4.09468C8.02403 3.87366 9.17157 4.04235 10.1663 4.57204C11.1611 5.10174 11.9415 5.95972 12.375 7.00001C12.8085 5.95972 13.5889 5.10174 14.5837 4.57204C15.5784 4.04235 16.726 3.87366 17.8311 4.09468C18.9362 4.3157 19.9305 4.91277 20.645 5.78431C21.3595 6.65585 21.75 7.74803 21.75 8.87501C21.75 15.25 12.375 20.5 12.375 20.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        
                                </Link>
                                <Link  className="btn border-theme-btn"> <span>Share</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16.5 21.75C18.1569 21.75 19.5 20.4069 19.5 18.75C19.5 17.0931 18.1569 15.75 16.5 15.75C14.8431 15.75 13.5 17.0931 13.5 18.75C13.5 20.4069 14.8431 21.75 16.5 21.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M16.5 8.25C18.1569 8.25 19.5 6.90685 19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25C14.8431 2.25 13.5 3.59315 13.5 5.25C13.5 6.90685 14.8431 8.25 16.5 8.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.9777 6.87207L8.52148 10.3783" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.52148 13.6221L13.9777 17.1283" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="tab_holder">
                    <ul className=" nav nav-tabs d-flex gap-2 align-items-center justify-content-start" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active " id="history-tab" data-bs-toggle="tab" data-bs-target="#history-tab-pane" type="button" role="tab" aria-controls="history-tab-pane" aria-selected="true"><i>History</i></button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link theme-text-color" id="bids-tab" data-bs-toggle="tab" data-bs-target="#bids-tab-pane" type="button" role="tab" aria-controls="bids-tab-pane" aria-selected="false">Bids</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link " id="owner-details-tab" data-bs-toggle="tab" data-bs-target="#owner-details-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Owner Details</button>
                        </li>   
                      </ul>
                </div>
    
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="history-tab-pane" role="tabpanel" aria-labelledby="history-tab-tab" tabindex="0">
                      <div className="row">
                        <div className="col-12 col-md-6 ">
                            <div className="history_card d-flex align-items-center">
                                <div className="creator_image d-flex gap-2 align-items-center">
                                    <img className="img-fluid" src={require(`../../images/creators/c2.png`)} alt="error"/>
                                    <div className="history_info theme-text-color">
                                        <h4>@Mark Wood won the with a bid of ETh 0.005 ($26.50) </h4>
                                        <p><b>2 days ago</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="history_card d-flex align-items-center">
                                <div className="creator_image d-flex gap-2 align-items-center">
                                <img className="img-fluid" src={require(`../../images/creators/c3.png`)} alt="error"/>
                                    <div className="history_info theme-text-color">
                                        <h4>@Mark Wood won the with a bid of ETh 0.005 ($26.50) </h4>
                                        <p><b>2 days ago</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-6 ">
                            <div className="history_card d-flex align-items-center">
                                <div className="creator_image d-flex gap-2 align-items-center">
                                <img className="img-fluid" src={require(`../../images/creators/c4.png`)} alt="error"/>
                                    <div className="history_info theme-text-color">
                                        <h4>@Mark Wood won the with a bid of ETh 0.005 ($26.50) </h4>
                                        <p><b>2 days ago</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="history_card d-flex align-items-center">
                                <div className="creator_image d-flex gap-2 align-items-center">
                                <img className="img-fluid" src={require(`../../images/creators/c5.png`)} alt="error"/>
                                    <div className="history_info theme-text-color">
                                        <h4>@Mark Wood won the with a bid of ETh 0.005 ($26.50) </h4>
                                        <p><b>2 days ago</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="history_card d-flex align-items-center">
                                <div className="creator_image d-flex gap-2 align-items-center">
                                <img className="img-fluid" src={require(`../../images/creators/c6.png`)} alt="error"/>
                                    <div className="history_info theme-text-color">
                                        <h4>@Mark Wood won the with a bid of ETh 0.005 ($26.50) </h4>
                                        <p><b>2 days ago</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 ">
                            <div className="history_card d-flex align-items-center">
                                <div className="creator_image d-flex gap-2 align-items-center">
                                <img className="img-fluid" src={require(`../../images/creators/c7.png`)} alt="error"/>
                                    <div className="history_info theme-text-color">
                                        <h4>@Mark Wood won the with a bid of ETh 0.005 ($26.50) </h4>
                                        <p><b>2 days ago</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>
                    <div className="tab-pane fade" id="bids-tab-pane" role="tabpanel" aria-labelledby="bids-tab-tab" tabindex="0">Opps ! No items found !</div>
                    <div className="tab-pane fade" id="owner-details-pane" role="tabpanel" aria-labelledby="owner-details-tab" tabindex="0">Opps ! No items found !</div>
                  </div>
            </div>
        </section>

        <section className="container mt-5" id="live_auction">
            <div className="section_heading text-start theme-text-color">
                <h2 className="section_title">Similar Auction You Might Be like</h2>
            </div>
      
            <div className="container">
      
              <div className="row">
              {
              liveAcution.map((item)=>
              <div className="col-12 col-md-6 col-lg-4">
                <AuctionCard data={item}/>
                </div>
              )
            }
               </div>
            </div>
         </section>
        </>
     );
}

export default AuctionDetails;