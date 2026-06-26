import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CPU-Scheduling-Simulator"
              description="Developed a CPU Scheduling Simulator to analyze and compare various CPU scheduling algorithms used in operating systems. The simulator implements FCFS, SJF (Non-Preemptive and SRTF), and Priority Scheduling (Preemptive and Non-Preemptive) algorithms. It calculates key performance metrics such as Waiting Time (WT), Turnaround Time (TAT), and Response Time (RT) for each process. The system also generates an interactive Gantt Chart, including CPU idle periods, to visualize process execution and scheduling behavior. This project helps in understanding scheduling efficiency and comparing algorithm performance under different workloads.
"
              ghLink="https://github.com/vaibhav303030/CPU-Scheduling-Simulator"
              demoLink="https://vaibhav303030.github.io/CPU-Scheduling-Simulator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI-powered Smart Warehouse Monitoring System"
              description="•Developed an Al-powered Smart Warehouse Monitoring System with a web dashboard to monitor
               temperature, humidity, moisture, and gas concentration for improved warehouse management.
               •Implemented a spoilage risk prediction model to generate risk scores and enable early identification of potential storage losses.
               •Built an anomaly detection system and interactive web dashboard to detect unsafe storage conditions
               and support proactive decision-making to prevent spoilage and improve storage safety."
              ghLink="https://github.com/vaibhav303030/WareHouse-Monitoring-System-Using-AI"
              demoLink=" https://vaibhav303030.github.io/WareHouse-Monitoring-System-Using-AI/"              
            />
          </Col>

        

     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AutonomousDelivery DroneWebsite"
              description="•Developcd an Autonomous Food &Medicine Delivery Drone as a member of Team AeroDrop, featuring an OTP
enabled smart container for secure delivery.
•Built the full-stack software system, including an e-commerce platform with OTP-based authentication, payment
•integration, and real-time tracking features.
Designed an ESP32-based OTP verification system, presented the projcct to intcnational jury pancls .and
collaborated on systcm design and event coordination."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
