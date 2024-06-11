import useClasses from "../../Hook/useClasses";
import FeaturedClasse from "./FeaturedClasse";

const FeaturedClasses = () => {
    const { classes } = useClasses();
console.log(classes)
    return (
        <div className="container mx-auto grid grid-cols-3 gap-5 w-[95%]">
            {classes && classes.map((classData) => (
                <FeaturedClasse key={classData.id} classData={classData} />
            ))}
        </div>
    );
};

export default FeaturedClasses;
