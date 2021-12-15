
import { Button, Modal,Col,  Row, Image } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './style.css'


function WeatherModal({show, onHide, icon, location, degree, condition }) {
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="weather-modal-body">
                    <Col className="weather-modal-body-text-side">
                        <Row className="weather-modal-location">{location}</Row>
                        <Row className="weather-modal-temp">{degree}&#x00B0;</Row>
                        <Row className="weather-modal-condition"> {condition} </Row>
                    </Col>
                    <Col className="weather-modal-body-image-side">
                        <Image className="weather-modal-body-image" src={icon} />
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
WeatherModal.propTypes ={
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    degree: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]).isRequired,
    condition: PropTypes.string.isRequired,
}

export default WeatherModal;
