

const HomeBannerRight = () => {
    return (
        <div>
            <div className="carousel mx-auto relative">
                <div id="slide1" className=" absolute carousel-item relative w-[270px]">
                    <img src="../../../public/images/Sajek.png" className="w-[270px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 bottom-0 ">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-[270px]">
                    <img src="../../../public/images/Sreemongol.png" className="w-[270px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-[270px]">
                    <img src="../../../public/images/sundorbon.png" className="w-[270px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HomeBannerRight;