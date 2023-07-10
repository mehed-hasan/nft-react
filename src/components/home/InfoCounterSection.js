import { counterSection } from "../../data/api";
import CounterCard from "../CounterCard";

function InfoCounterSection() {
    return ( 
        <section id="counter" >
        <div className="animated_ball"></div>
          <div className="container  p-4 shadow">
            <div className="row align-items-center">
              {
                counterSection.map((item)=> 
                  <div className="col-6  col-lg-3   border-0">
                    <CounterCard data={item}/>
                  </div>
                )
              }

            </div>
          </div>
      
    </section>
     );
}

export default InfoCounterSection;