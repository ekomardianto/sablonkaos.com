import { Accordion, Container, Row, Col } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <div className="faq" data-aos="fade-up">
      <Container>
        <Row>
          <Col>
            <h2 className="mt-2 mb-2 text-center">
              Pertanyaan yang sering di tanyakan :)
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-2 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
