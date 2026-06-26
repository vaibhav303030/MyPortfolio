import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="vaibhav303030"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />

       <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code ON LeetCode</strong>
      </h1>
 <div className="text-center">
  <img
    src="https://leetcard.jacoblin.cool/VAIBHAV_JADHAV_03"
    alt="LeetCode Stats"
  />
</div>
    </Row>
    
  );
}

export default Github;
