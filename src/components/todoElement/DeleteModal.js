
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

function DeleteModal({show, onHide, onRemoveTodo, id, form}) {

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <p>This task will be permanently deleted. <br />
                    Do you wish to Continue </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={()=>onRemoveTodo(id, form)}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

DeleteModal.propTypes ={
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,


}
export default DeleteModal;
