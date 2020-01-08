import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="band-col text-center">
        <Container>
          <div className="padding">
            <p className="footer-txt">Visit our Office</p>
            <hr className="footer-hr w-50"></hr>
            <p className="footer-txt">2986 Danforth Ave. Suite #205</p>
            <p className="footer-txt">M4C 1M6, Toronto, Ontario</p>
            <p className="footer-txt">
              416-628-5473 /647-797-3362 / 416-707-2925
            </p>
            <p className="footer-txt">ipworldcanada@gmail.com</p>
          </div>
          <hr className="footer-hr"></hr>
          <h5 className="text-center padding mb-0">
            &copy; 2019 The IPWorld Inc. All rights reserved.
          </h5>
        </Container>
      </div>
    </React.Fragment>
  );
}
