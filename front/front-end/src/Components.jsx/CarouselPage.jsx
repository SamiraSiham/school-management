import Carousel from "react-bootstrap/Carousel";
import enslogo from "../pictures/enslogo.png";
import img1 from "../pictures/img1.jpeg";
import img2 from "../pictures/img2.jpeg";
import img3 from "../pictures/img3.jpeg";
import img4 from "../pictures/img4.png";

export default function CarouselPage() {
    return (
        <div className="container">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        style={{
                            objectFit: "fill",
                            height: "300px",
                            opacity: "0.7",
                        }}
                    />
                    <Carousel.Caption>
                        {/* <h5>First slide label</h5>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={enslogo}
                        alt="Second slide"
                        style={{
                            objectFit: "fill",
                            height: "300px",
                            opacity: "0.7",
                        }}
                    />
                    <Carousel.Caption>
                        {/* <h5>Second slide label</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Third slide"
                        style={{
                            objectFit: "fill",
                            height: "300px",
                            opacity: "0.7",
                        }}
                    />
                    <Carousel.Caption>
                        {/* <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        style={{
                            objectFit: "fill",
                            height: "300px",
                            opacity: "0.7",
                        }}
                    />
                    <Carousel.Caption>
                        {/* <h5>Fourth slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                        style={{
                            objectFit: "fill",
                            height: "300px",
                            opacity: "0.7",
                        }}
                    />
                    <Carousel.Caption>
                        {/* <h5>Fifth slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
