function InfoCounterSection() {
    return ( 
        <section id="counter" >
        <div className="animated_ball"></div>
          <div className="container  p-4 shadow">

            <div className="row align-items-center">
              <div className="col-6  col-lg-3   border-0">
                <div className="counter-item  mb-4 mb-lg-0">
                  <h3>41+</h3>
                  <p>User Active</p>
                </div>
              </div>
              <div className="col-6  col-lg-3 ">
                <div className="counter-item mb-4 mb-lg-0">
                  <h3>21K+</h3>
                  <p>Artworks</p>
                </div>
              </div>
              <div className="col-6  col-lg-3 ">
                <div className="counter-item  mb-4 mb-lg-0">
                  <h3>10K+</h3>
                  <p>Creative Artist</p>
                </div>
              </div>
              <div className="col-6  col-lg-3 ">
                <div className="counter-item mb-4 mb-lg-0">
                  <h3>999K+</h3>
                  <p>Trades</p>
                </div>
              </div>
            </div>
          </div>
      
    </section>
     );
}

export default InfoCounterSection;