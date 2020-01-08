import React from "react";
import C1 from "./Images/image1.jpg";
import C2 from "./Images/image2.jpg";
import C3 from "./Images/image3.jpg";
import PC from "./Images/repair.jpg";
import TV from "./Images/webTV.jpg";
import IPTV from "./Images/logo.png";
import VOIP from "./Images/voip.png";
import PoS from "./Images/pos.jpg";
import SS from "./Images/ss.jpg";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import HomeCard from "./Components/HomeCard";

export default function Home() {
  return (
    <React.Fragment>
      <div className="band-col">
        <Container>
          <Carousel>
            <Carousel.Item>
              <Image src={C1} className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={C2} className="carousel-img" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={C3} className="carousel-img" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <Container>
        <h3 className="text-primary padding mb-0">Welcome to IPWorld Inc.</h3>
        <p className="padding mb-0 text-justify">
          IPWorld is a platform that allows individuals and businesses to
          implement various types of standardized IT and telecommunications
          solutions. Our services range from PCs and servers, to web
          communications and entertainment, and even Point of Sale (PoS) and
          Security Surveillance infrastructure.
        </p>
        <div className="padding">
          <Row>
            <Col md={6} lg={4} className="padding">
              <HomeCard
                img={PC}
                link="/"
                title="Laptops, Desktops, Gaming PCs"
                txt="Unbelievable prices on laptops and desktops (from off-lease computer auction), as well as repairs. Our gaming PCs are built by experts using high grade components."
              ></HomeCard>
            </Col>
            <Col md={6} lg={4} className="padding">
              <HomeCard
                img={TV}
                link="/"
                title="Web TV"
                txt="Make your own TV station, with easy and reliable solutions for your very own online TV channel(s)!"
              ></HomeCard>
            </Col>
            <Col md={6} lg={4} className="padding">
              <HomeCard
                img={IPTV}
                link="/"
                title="IPTV"
                txt="Enjoy national and international news, sports, and entertainment at the press of a button, with thousands of channels at up to 4K/UHD. "
              ></HomeCard>
            </Col>
            <Col md={6} lg={4} className="padding">
              <HomeCard
                img={VOIP}
                link="/"
                title="Long-Distance Calling"
                txt="Pin-less long distance calling, with the cheapest rates to over 50 different countries, including . . . !"
              ></HomeCard>
            </Col>
            <Col md={6} lg={4} className="padding">
              <HomeCard
                img={PoS}
                link="/"
                title="Point of Sale"
                txt="For restaurants and small business, operate from your smart phone and/or tablet. Easy and Reliable solution for your daily sales tracking solution, starting from just $500!"
              ></HomeCard>
            </Col>
            <Col md={6} lg={4} className="padding">
              <HomeCard
                img={SS}
                link="/"
                title="Security Surveillance System"
                txt="Ensure peace of mind with our 24/7 surveillance systems, designed to cover a large perimeter both inside and out. Tested for Canadian weather!"
              ></HomeCard>
            </Col>
          </Row>
        </div>
        <h5 className="text-center">IPWorld, in service since 1996!</h5>
      </Container>
    </React.Fragment>
  );
}
