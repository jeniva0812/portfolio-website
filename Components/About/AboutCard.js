import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jeniva Mortuja </span>
            from <span className="purple"> West Bengal, India.</span>
            <br /> I am a THIRD year student pursuing a Bachelors' of Engineering in Computer Science and Engineering at Jadavpur University, Kolkata.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading blogs/stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "No matter how pretty the things are...make them prettier!"{" "}
          </p>
          <footer className="blockquote-footer">Jeniva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
