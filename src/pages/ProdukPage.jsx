import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { read, utils } from "xlsx";
import { Rupiah } from "../utils/NumberFormat";

const ProdukPage = () => {
  // Start Fungsi untuk membaca file Excel Sheet1
  const [pres, setPres] = useState([]);

  useEffect(() => {
    (async () => {
      /* Download file */
      const f = await (await fetch("data/produk.xlsx")).arrayBuffer();
      const wb = read(f); // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      const data = utils.sheet_to_json(ws); // generate objects
      setPres(data); // update state
      // console.log(data);
    })();
  }, []);
  // EndFungsi untuk membaca file Excel Sheet1

  return (
    <div className="semuaproduk" id="semuaproduk">
      <Container>
        <Row data-aos="fade-up">
          <Col>
            <h1 className="text-center fw-bold">Semua Produk</h1>
            <p className="text-center">
              Explore lebih banyank Produk, Pesan yang Kamu Suka!
            </p>
          </Col>
        </Row>
        <Row>
          {pres.map((produk) => {
            return (
              <Col key={produk.id}>
                <img
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
      </Container>
    </div>
  );
};

export default ProdukPage;
