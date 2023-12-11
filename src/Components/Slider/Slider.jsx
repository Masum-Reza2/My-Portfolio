/* eslint-disable react/prop-types */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel"

const Slider = ({ data }) => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            renderIndicator={false}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
        >
            {
                data?.map((slider, index) => <div key={index} className="h-full">
                    <img className="h-full rounded-lg lg:p-1" src={slider?.img} />
                </div>)
            }
        </Carousel>
    )
}

export default Slider