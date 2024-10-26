import { Col, Container, Row } from "react-bootstrap";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import logo from "../../images/2-.jpg";
export default function NavBar({ search }) {
  function onSearch(word) {
    search(word);
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="py-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="nav-logo" src={logo} alt="" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <input
                type="text"
                className="form-control"
                placeholder="البحث..."
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
              />
              <FaSearch className="icon-search" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
