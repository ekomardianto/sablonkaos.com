import { Container, Row, Col, Accordion } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SnKPage = () => {
  return (
    <div className="snk-page">
      <div className="snk min-vh-100">
        <Container>
          <Row data-aos="fade-up">
            <Col>
              <h1 className="text-center fw-bold mb-2">Syarat & Ketentuan</h1>
              <p className="text-center">
                Beberapa hal yang perlu diketahui oleh teman-teman sebelum
                memesan barang di toko kami:
              </p>
            </Col>
          </Row>
          <Row data-aos="fade-up">
            <table>
              <tr>
                <td className="no">1.</td>
                <td className="textsnk">
                  Barang yang sudah dibeli tidak dapat dikembalikan dengan
                  alasan apapun.
                </td>
              </tr>
              <tr>
                <td className="no">2.</td>
                <td>
                  Sebelum barang dikirim sudah melewati QC tim toko kami
                  sehingga dapat dijamin barang yang datang sampai kerumah kamu
                  sudah pasti bagus, tidak ada cacat.
                </td>
              </tr>
              <tr>
                <td className="no">3.</td>
                <td>
                  Pastikan terlebih dahulu Warna dan Ukuran Barang sudah sesuai
                  yang kamu inginkan sebelum melakukan pembayaran.
                </td>
              </tr>
              <tr>
                <td className="no">4.</td>
                <td>
                  Kami tidak bertanggung jawab jika karna kecerobohan customer
                  menyebabkan kerugian seperti SALAH TRANSFER DANA, MENTRANSFER
                  KE REKENING ORANG LAIN bukan Ke Rekening Toko Kami yang telah
                  tertera di halaman Toko kami. Sehingga kami tidak akan
                  mengganti apapun dan kami bebas dari tuntutan apapun.
                </td>
              </tr>
            </table>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-2 mt-5">Cara Memesan</h1>
            </Col>
          </Row>

          <Row className="row-cols-lg-2 row-cols-1 g-2 pt-5">
            <Col>
              <Accordion className="shadow-sm">
                <Accordion.Item>
                  <Accordion.Header>
                    <p>
                      <span className="nomor">1.</span> Pilih Produk yang Kamu
                      Sukai
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    setelah itu lanjutkan ke langkah ke-2
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion className="shadow-sm">
                <Accordion.Item>
                  <Accordion.Header>
                    <p>
                      <span className="nomor">2.</span> Tekan Tombol "Beli"
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    maka kamu akan langsung diarahkan ke WhatsApp Toko kami
                    dengan Keterangan produk yang kamu pilih
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion className="shadow-sm">
                <Accordion.Item>
                  <Accordion.Header>
                    <p>
                      <span className="nomor">3.</span> Tunggu Konfirmasi dari
                      Admin Toko Kami
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    Admin toko kami akan mengkonfirmasi ketersediaan produk dan
                    hal lain yang perlu dikonfirmasi kembali, dan memberikan
                    Nomor Rekening kami untu melakukan pembayaran
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <Accordion className="shadow-sm">
                <Accordion.Item>
                  <Accordion.Header>
                    <p>
                      <span className="nomor">4.</span> Lakukan Pembayaran
                      dengan metode transfer Bank
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    Nama Bank: BCA <br /> Nomor Rek: 0342897060 <br /> An: Eko
                    Mardianto. <br />
                    <br /> Pastikan Nomor & Nama Rekening sesuai dengan yang
                    kami berikan. Jangan sekalipun melakukan transfer ke
                    rekening selain informasi rekening yang telah kami berikan
                    dari Whatsapp maupun yang tercantum di halaman resmi toko
                    kami
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SnKPage;
