import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <div className="footer pt-4">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="4" className="contact mb-5">
            <h3 className="fw-bold">KaosSablon.</h3>
            <p className="desc">
              Kami menjual berbagai jenis kaos dengan bahan berkualitas distro
              berbagai ukuran (S,M,L,XL) dengan design sablon dapat disesuaikan
              keinginan.
            </p>
            <div className="nohp mt-4">
              <h5>Contact</h5>
            </div>
            <div className="nohp mb-1 mt-1">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 896 2055 0512</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">dokoteam@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col lg="2" className="d-flex flex-column col-lg-2 col mb-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="produk">Produk</Link>
            <Link to="testimoni">Testimoni</Link>
            <Link to="snk">Syarat & Ketentuan</Link>
            <Link to="faq">FAQ</Link>
          </Col>
          <Col lg="3">
            <h5 className="fw-bold mb-3">Temukan kami di Google Map!</h5>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102588.33355257908!2d101.42553412035245!3d0.44515055608718107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5af584b1251a1%3A0xe31c20297483202e!2sgalericupang.com!5e0!3m2!1sid!2sid!4v1691309998223!5m2!1sid!2sid"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </Col>
          <Col lg="2">
            <h5 className="fw-bold mb-3">Ikuti kami di Medsos!</h5>

            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
            <p className="mt-3 px-5">_kaossablon.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright 2023 by Dokoteam, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
