import HomeBannerRight from "../Components/HomeBanner/HomeBannerRight";
import HomeBannerLeft from "../Components/HomeBanner/HomeBannerleft";
import NavBar from "./Shared/NavBar";
 // Replace with the actual path to your background image

const Home = () => {
    const containerStyle = {
        backgroundImage: 'url(../../../../public/images/cover.png)',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundColor: '#000000B2',
        backgroundBlendMode: 'darken',
        
      };
    return (
        <div className="h-screen text-white " style={containerStyle}>
            <div className="lg:px-28 px-5">
            <NavBar />
            <div className=" flex justify-between items-center">
             <div>
                <HomeBannerLeft></HomeBannerLeft>
             </div>
             <div className="">
                <HomeBannerRight></HomeBannerRight>
             </div>
            </div>
            </div>
        </div>
    );
};

export default Home;
