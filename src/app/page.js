import Navbar from "@/components/navbar";
import Article from "@/components/article";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Container>
          <Row>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
            <Col>
              <Article image="pull1.jpg" title="pull gray" price="100" />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
