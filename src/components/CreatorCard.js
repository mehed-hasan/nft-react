function CreatorCard({data}) {
    return ( 

        <div className="creator_card theme-text-color shadow">
                                <div className="creator_image d-flex gap-2 align-items-center">
                                    <img className="img-fluid" src={require(`../images/creators/${data.image}`)} alt="error"/>
                                    <div className="creator_info theme-text-color">
                                        <h4>{data.name}</h4>
                                        <p>{data.earned}</p>
                                    </div>
                                </div>
                            </div>
     );
}

export default CreatorCard;