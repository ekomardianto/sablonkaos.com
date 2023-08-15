import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
// Start Import untuk Baca data Excel
import { read, utils } from "xlsx";
import { Rupiah } from "../utils/NumberFormat";
// End Import untuk Baca data Excel
import { dataSwiper } from "../data/index";
import HeadBrand from "../assets/img/headerbrand.png";
import FaqComponent from "../components/FaqComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//import gambar produk
// import produk1 from "../assets/img/produk/1.jpg";
// import produk2 from "../assets/img/produk/2.jpg";
// import produk3 from "../assets/img/produk/3.jpg";
// import produk4 from "../assets/img/produk/4.jpg";
// import produk5 from "../assets/img/produk/5.jpg";
// import produk6 from "../assets/img/produk/6.jpg";
// import produk7 from "../assets/img/produk/7.jpg";
// import produk8 from "../assets/img/produk/8.jpg";
// import produk9 from "../assets/img/produk/9.jpg";
// import produk10 from "../assets/img/produk/10.jpg";
// import produk11 from "../assets/img/produk/11.jpg";
// import produk12 from "../assets/img/produk/12.jpg";
// import produk13 from "../assets/img/produk/13.jpg";
// import produk14 from "../assets/img/produk/14.jpg";

const HomePage = () => {
  // Start Fungsi untuk membaca file Excel Sheet1
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      /* Download file */
      const f = await (await fetch("data/produk.xlsx")).arrayBuffer();
      const wb = read(f); // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[1]]; // get the first worksheet
      const data = utils.sheet_to_json(ws); // generate objects
      setData(data); // update state
      // console.log(data);
    })();
  }, []);
  // EndFungsi untuk membaca file Excel Sheet1
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Pesan
                <br />
                <span>Kaos Kesukaanmu</span>
                <br />
                Di Distro Kami
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Explore Kaos Sablon yang tersedia di Distro kami, beli sekarang
                juga sebelum kehabisan stok yang tersedia!
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-1 mb-xs-0 mb-2 animate__animated animate__fadeInRight animate__delay-1s"
                onClick={() => navigate("/produk")}
              >
                Lihat Produk
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInLeft animate__delay-1s">
                Cara Pesan
              </button>
            </Col>
            <Col lg="6">
              <img
                src={HeadBrand}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="produk w-100 min-vh-100" id="produkunggulan">
        <Container>
          <Row data-aos="fade-up" data-aos-duration="1500">
            <Col>
              <h1 className="text-center fw-bold">Produk Unggulan</h1>
              <p className="text-center">Produk Unggulan Kami</p>
            </Col>
          </Row>
          <Row>
            {data.map((produk) => {
              console.log(produk.image);
              return (
                <Col
                  key={produk.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={produk.delay}
                >
                  <img
                    // src={produk.image}
                    src={"produk/" + produk.id + ".jpg"}
                    alt={produk.judul}
                    className="w-100 mb-5 rounded-top"
                  />

                  <div className="star mb-2 px-2">
                    <i className={produk.star1}></i>
                    <i className={produk.star2}></i>
                    <i className={produk.star3}></i>
                    <i className={produk.star4}></i>
                    <i className={produk.star5}></i>
                  </div>
                  <h5 className="judul px-2">{produk.judul}</h5>
                  <div className="kodeproduk">
                    <p>Kode Produk : {produk.id}</p>
                  </div>
                  <div className="ket d-flex justify-content-between align-items-center px-2 pb-2">
                    <p>Rp. {Rupiah(produk.harga)}</p>
                    <a
                      target="_blank"
                      className="btn btn-danger rounded-1"
                      href={
                        "https://wa.me/6289620550512?text=Assalamu%27alaikum%2C%20Saya mau pesan%20Produk " +
                        produk.judul +
                        ", Kode Produk " +
                        produk.id
                      }
                    >
                      {produk.tombol}
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-primary rounded-5 btn-lg"
                data-aos="fade-right"
                onClick={() => navigate("/produk")}
              >
                Lihat Semua Produk{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimoni w-100" id="testimoni">
        <Container>
          <Row className="mb-3" data-aos="fade-up">
            <Col>
              <h1 className="text-center fw-bold">Testimoni</h1>
              <p className="text-center">
                Simak juga testimoni pelanggan kami?
              </p>
            </Col>
          </Row>
          <Row data-aos="fade-right">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((swip) => {
                return (
                  <SwiperSlide key={swip.id} className="shadow-sm">
                    <p className="desc">{swip.desc}</p>
                    <div className="people">
                      <img src={swip.image} alt={swip.name} />
                      <div className="nama">
                        <h5 className="mb-1 mt-2">{swip.name}</h5>
                        <p className="m-0 fw-bold">{swip.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default HomePage;
