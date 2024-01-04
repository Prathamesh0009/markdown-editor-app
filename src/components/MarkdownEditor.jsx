import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { ThemeContext } from "../contexts/ThemeContect";
import MarkdownIt from "markdown-it";
import { useEffect } from "react";

function MarkdownEditor() {
  const [inputMarkdown, setInputMarkdown] = useState("");
  const [outputHtml, setOutputHtml] = useState("");

  const [colClass, setColClass] = useState(ThemeContext);

  const topDown = (isChecked) => {
    return isChecked ? setColClass(`col-12`) : setColClass(`col-6`);
  };

  useEffect(() => {
    const sdf = new MarkdownIt();
    const parsedValue = sdf.render(inputMarkdown);
    setOutputHtml(parsedValue);
  }, [inputMarkdown]);

  return (
    <div>
      <Form style={{ padding: "10px" }}>
        <label>top-down</label>
        <Form.Check
          type="switch"
          onClick={(res) => topDown(res.target.checked)}
        />
      </Form>
      <Row className="mb-5">
        <Col className={`mb-4 ${colClass}`}>
          <strong
            style={{
              fontSize: 25,
              backgroundColor: "yellow",
              borderRadius: "14px",
              padding: "5px",
            }}
          >
            Enter Markdown
          </strong>
          <hr />
          <textarea
            value={inputMarkdown}
            onChange={(e) => setInputMarkdown(e.target.value)}
            style={{ height: "350px" }}
            className="form-control rounded-bottom "
          ></textarea>
        </Col>
        <Col className={`mb-4 ${colClass}`}>
          <strong
            style={{
              fontSize: 25,
              backgroundColor: "yellow",
              borderRadius: "14px",
              padding: "5px",
            }}
          >
            Preview
          </strong>
          <hr />
          <div
            dangerouslySetInnerHTML={{ __html: outputHtml }}
            style={{ height: "350px" }}
            className="form-control rounded-bottom"
          ></div>
        </Col>
      </Row>
    </div>
  );
}

export default MarkdownEditor;
