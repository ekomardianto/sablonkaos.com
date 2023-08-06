import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestiPage = () => {
  return (
    <div className="testimoniall" id="testimoniall">
      <Container>
        <Row data-aos="fade-up">
          <Col>
            <h1 className="text-center fw-bold">Testimoni</h1>
            <p className="text-center">
              Semua testimoni yang pernah mengikuti kelas
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-1" data-aos="fade-right">
          {testimonial.map((testi) => {
            return (
              <Col key={testi.id} className="g-2 pb-4">
                <p className="desc shadow-sm p-2">{testi.desc}</p>
                <div className="people">
                  <img src={testi.image} alt={testi.name} />
                  <div className="nama">
                    <h5 className="mb-1 mt-2">{testi.name}</h5>
                    <p className="m-0 fw-bold">{testi.skill}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <FaqComponent />
    </div>
  );
};

export default TestiPage;
