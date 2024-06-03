import { useParams } from "react-router-dom";


const TrainerBookedPage = () => {
    const {id,time, slot} =useParams()
    console.log(id,time,slot)
    return (
        <div>
            
        </div>
    );
};

export default TrainerBookedPage;