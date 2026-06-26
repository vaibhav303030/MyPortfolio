import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vaibhav Jadhav</span>{" "}
            from <span className="purple">Niphad, India</span>.
            <br />
            I’m currently studying in{" "}
            <span className="purple">B.Tech Computer Engineering</span> at{" "}
            <span className="purple">Sanjivani college of Engineering,Kopargaon</span>.
            <br />
         
            creative and inspired:
            ABOUT ME

Passionate Computer Engineering student with a strong interest in Artificial Intelligence, IoT, and Full-Stack Development. Experienced in building innovative projects including AI-powered warehouse monitoring systems, IoT-based energy monitoring solutions, and web applications using React, Node.js, PHP, and MongoDB. Skilled in problem-solving, software development, and creating practical solutions using modern technologies. Seeking opportunities to apply technical skills and gain industry experience through internships and real-world projects.

          </p>

          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
