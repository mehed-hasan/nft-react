import React from "react";
import { Link } from "react-router-dom";

const Nav = ({changeThemeModeFunction}) => {
  return (
    <>
    <section id="navbar" className="p-0">
      <nav className="navbar navbar-expand-lg navbar-light  shadow-lg fixed-top bg-dark p-3" >
          <div className="container">
            <Link className="navbar-brand logo" to="index.html">
              <svg width="97" height="41" viewBox="0 0 97 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5667 0.0273356C9.78184 -0.574657 -0.0021729 8.84498 3.61979e-07 20.506C3.61979e-07 21.6071 0.897557 22.5003 1.99868 22.5003H10.8366C11.7812 27.6676 16.3176 31.5976 21.7522 31.5976H27.3172C28.0466 31.5976 28.6378 31.0064 28.6378 30.2769V28.9216C28.6378 28.1921 28.0466 27.6009 27.3172 27.6009H21.7522C18.5328 27.6009 15.8076 25.4436 14.9419 22.5003H19.5405C23.7711 22.5003 27.5758 20.151 29.4694 16.3674C30.2221 14.862 30.1467 13.1104 29.2601 11.6767C28.3821 10.2511 26.8564 9.40278 25.1794 9.40278H21.7514C16.3168 9.40278 11.7805 13.3328 10.8359 18.5044H4.11833C5.15063 10.0004 12.6752 3.46688 21.5682 4.03121C29.7411 4.55061 36.3847 11.1436 36.9614 19.3128C37.6409 28.9455 29.9932 37.0039 20.4982 37.0039C14.3305 37.0039 8.68507 33.5158 5.86925 28.1385C5.70553 27.8248 5.38751 27.6227 5.034 27.6227H2.66876C1.99505 27.6227 1.5307 28.3174 1.80815 28.931C5.0963 36.2049 12.439 41.0005 20.4975 41.0005C32.0657 41.0005 41.4281 31.373 40.9848 19.7077C40.5849 9.18256 32.0846 0.564131 21.5667 0.0273356ZM21.7522 13.3994H25.1801C25.5691 13.3994 25.7734 13.6377 25.8618 13.7797C25.9495 13.9217 26.0748 14.2187 25.8951 14.578C24.6824 16.9983 22.2455 18.5037 19.5405 18.5037H14.9419C15.8032 15.556 18.5328 13.3994 21.7522 13.3994Z" fill="#1E3C72"/>
                <path d="M66.4127 31.3506H61.1268L52.286 17.9657V31.3506H47V9.65039H52.286L61.1268 23.0971V9.65039H66.4127V31.3506Z" fill="#1E3C72"/>
                <path d="M84.3712 9.65039V13.8853H75.5303V18.4603H82.1455V22.5716H75.5303V31.3506H70.2444V9.65039H84.3712Z" fill="#1E3C72"/>
                <path d="M96.763 26.8684V31.3506H94.0737C92.1571 31.3506 90.663 30.8869 89.5914 29.9596C88.5198 29.0116 87.984 27.4763 87.984 25.3537V18.4912H85.882V14.1017H87.984V9.89769H93.27V14.1017H96.7321V18.4912H93.27V25.4155C93.27 25.9307 93.3936 26.3017 93.6409 26.5283C93.8882 26.755 94.3004 26.8684 94.8774 26.8684H96.763Z" fill="#1E3C72"/>
                </svg>
                
            </Link>
            <button className="navbar-toggler theme-text-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="index.html">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="pages/explore.html">Explore</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="pages/our_creators.html">Creators</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="pages/live_auction.html">Live Auction</Link>
                </li>




              </ul>
              <form >
                <button className="btn border-theme-btn  theme-text-color " type="submit"><span>Connect Wallet</span></button>
                <Link className="btn ms-2" type="submit" to="pages/sign_in.html">
                  <svg width="22" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 20.5C20.4183 20.5 24 16.9183 24 12.5C24 8.08172 20.4183 4.5 16 4.5C11.5817 4.5 8 8.08172 8 12.5C8 16.9183 11.5817 20.5 16 20.5Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M3.875 27.5001C5.10367 25.3716 6.87104 23.604 8.99944 22.375C11.1278 21.146 13.5423 20.499 16 20.499C18.4577 20.499 20.8722 21.146 23.0006 22.375C25.129 23.604 26.8963 25.3716 28.125 27.5001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
              </form>

              <li className="nav-item list-unstyled">
                <Link onClick={()=>{changeThemeModeFunction()}} className="nav-link " aria-current="page" to="#!">
                  <svg id="moon_svg" fill="black" height="100%" width="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  enable-background="new 0 0 512 512">
                    <g>
                      <g>
                        <path d="m275.4,500.7c-135,0-244.7-109.8-244.7-244.7 1.06581e-14-134.9 109.8-244.7 244.7-244.7 8.2,0 16.4,0.4 24.6,1.2 7.2,0.7 13.5,5.2 16.5,11.7s2.4,14.2-1.6,20.2c-23,33.8-35.2,73.3-35.2,114.2 0,105 78.7,192.2 183.2,202.6 7.2,0.7 13.5,5.2 16.5,11.7 3.1,6.5 2.4,14.2-1.6,20.2-45.8,67.4-121.4,107.6-202.4,107.6zm-12.5-448c-106.5,6.5-191.2,95.2-191.2,203.3 1.42109e-14,112.3 91.4,203.7 203.7,203.7 56.4,0 109.6-23.4 147.8-63.7-46.2-11.7-88.1-36.8-120.8-72.6-41.1-45.2-63.8-103.6-63.8-164.6 0.1-37.1 8.4-73.2 24.3-106.1z"/>
                      </g>
                    </g>
                  </svg>
                  
                  <svg id="sun_svg" fill="white" height="100%" width="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  enable-background="new 0 0 512 512">
                    <g>
                      <g>
                        <path d="m256,105.5c-83.9,0-152.2,68.3-152.2,152.2 0,83.9 68.3,152.2 152.2,152.2 83.9,0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0,263.5c-61.4,0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4,0 111.4,50 111.4,111.4 0,61.4-50,111.4-111.4,111.4z"/>
                        <path d="m256,74.8c11.3,0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v23c2.84217e-14,11.3 9.1,20.4 20.4,20.4z"/>
                        <path d="m256,437.2c-11.3,0-20.4,9.1-20.4,20.4v22.9c0,11.3 9.1,20.4 20.4,20.4 11.3,0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4z"/>
                        <path d="m480.6,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h23c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z"/>
                        <path d="m54.4,235.6h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h22.9c11.3,0 20.4-9.1 20.4-20.4 0.1-11.3-9.1-20.4-20.3-20.4z"/>
                        <path d="M400.4,82.8L384.1,99c-8,8-8,20.9,0,28.9s20.9,8,28.9,0l16.2-16.2c8-8,8-20.9,0-28.9S408.3,74.8,400.4,82.8z"/>
                        <path d="m99,384.1l-16.2,16.2c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z"/>
                        <path d="m413,384.1c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2z"/>
                        <path d="m99,127.9c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l16.2,16.2z"/>
                      </g>
                    </g>
                  </svg>  
                </Link>
              </li>

            </div>
          </div>
        </nav>
    </section>
    </>
  );
};

export default Nav;
