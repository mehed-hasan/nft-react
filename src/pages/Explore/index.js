import { useState } from "react";
import ExploreCard from "../../components/ExploreCard";
import { cats, explored } from "../../data/api";

function ExplorePage() {

  const [data, setData] = useState(explored);
  const [tabCat, setTabCat] = useState('all')
  
  const onTabChange = ((tabCat) =>{
      setTabCat(tabCat);
  })
    return ( 


        <section className="explore_section theme-text-color container mt-5">
          
      
            <div className="section_heading text-center theme-text-color d-flex flex-column flex-lg-row justify-content-between">
                <h2 className="section_title">Explore NFTs</h2>
                
                <ul className="nav nav-tabs d-flex gap-4 align-items-center justify-content-center" id="myTab" role="tablist">
          {
            cats.map((item) =>
            <li className="nav-item" role="presentation">
            <button  onClick={() => onTabChange(item)} className={`nav-link ${tabCat === item ? 'active' : ''} text-capitalize`} id={`${item}-tab`} data-bs-toggle="tab" data-bs-target={`#${item}-tab-pane`} type="button" role="tab" aria-controls={`${item}-tab-pane`} aria-selected="true">{item}</button>
            </li>
            )
          }
          


        </ul>
            </div>
      
            <div className="container">
            <div className="tab-content" id="myTabContent">
            {
              cats.map((item) =>
              <div className={`tab-pane fade  ${tabCat === item ? 'show active' : ''}`} id={`${item}-tab-pane`} role="tabpanel" aria-labelledby={`${item}-tab`} tabindex="0">
              <div className="col-lg-12">
                <div className="row">
                  {
                    explored.filter((explore)=>
                      {
                        if(tabCat === 'all'){
                          return data;
                        }else{
                          return explore.cat === item ;
                        }
                      }
                    ).map((item) =>
                    <div className="col-12 col-md-6 col-lg-3 mt-4">
                      <ExploreCard data={item}/>
                    </div> 
                    )
                  }
                </div>
              </div>
            </div>
              
              )
            }

          </div>
              
        </div>
      
              
          </section>
     );
}

export default ExplorePage;