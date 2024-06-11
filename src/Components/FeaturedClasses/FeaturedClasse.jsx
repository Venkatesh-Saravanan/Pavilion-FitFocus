

const FeaturedClasse = ({classData}) => {
    
    return (
        <div>
            <div className="flex items-center">
                <div>
                    <img width={200} height={200} src={classData.image} alt="">
                        
                    </img>
                </div>
                <div>
                    
                       <h1></h1>
                    
                </div>
            </div>
        </div>
    );
};

export default FeaturedClasse;