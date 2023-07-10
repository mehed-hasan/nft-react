import CreatorCard from "../../components/CreatorCard";
import { creators } from "../../data/api";
import '../../styles/creators.css';

function CreatorsPage() {
    return ( 
        <section class="container mt-5" id="our_creators">
                <div class="section_heading text-start theme-text-color">
                    <h2 class="section_title">Our Creators</h2>
                </div>

                <div className="container">
                    <div className="row">
                    {
                    creators.map((item) =>
                    <div className="col-6 col-md-4 col-lg-3">
                        <CreatorCard data={item}/>
                    </div>
                    )
                    }
                </div>
        </div>
                
    </section>



     );
}

export default CreatorsPage;