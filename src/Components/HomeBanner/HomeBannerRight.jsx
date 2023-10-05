

const HomeBannerRight = () => {
    return (
        <div>
            <div className="carousel w-full">
               <div>
               <div id="slide1" className="carousel-item relative w-full">
                    <div className=" ">
                        <img src="../../../public/images/Sajek.png" className="w-[270px]" />
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-1/2 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
               </div>


                <div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="../../../public/images/Sreemongol.png" className="w-[270px]" />

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-1/2 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="../../../public/images/sundorbon.png" className="w-[270px]" />

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-1/2 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>

            </div>
        </div>
    );
};

export default HomeBannerRight;