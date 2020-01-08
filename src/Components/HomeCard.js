import React from "react";
import Card from "react-bootstrap/Card";

export default function HomeCard(props) {
  return (
    <React.Fragment>
      <Card className="h-100">
        <Card.Link href={props.link}>
          <Card.Img variant="top" src={props.img} className="card-img" />
        </Card.Link>
        <Card.Body>
          <Card.Title>
            <Card.Link href={props.link}>{props.title}</Card.Link>
          </Card.Title>
          <Card.Text>{props.txt}</Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
