import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/MarkdownDocsCard.css";

function MarkdownDocsCard(props) {
  return (
    <div>
      <div style={{ backgroundColor: "yellow", borderRadius: "14px" }}>
        <h6 style={{ textAlign: "center", marginBottom: "5px" }}>
          {props.title}
        </h6>
      </div>
      <div style={{ textAlign: "center", marginBottom: "5px" }}>
        {props.children}
      </div>
    </div>
  );
}

export default MarkdownDocsCard;
