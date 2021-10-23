import CCarousel from "../../components/CCarousel/CCarousel";
import CProduct from "../../components/CProduct/CProduct";

const HomeModule = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className="xl:px-20 lg:px-20 md:px-10 sm:px-2 py-2">
            <CCarousel />
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {arr.map(item => {
                    return(
                        <CProduct className="col-span-1" key={item} />
                    )
                })}
            </div>
        </div>
    )
}
export default HomeModule;