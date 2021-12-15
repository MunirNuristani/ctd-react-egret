import { Button, Modal } from 'react-bootstrap'
import { useRef } from 'react'
import PropTypes from 'prop-types'

function AddModal({show, onHide, selectForm, add }) {
    const dropDownValue = useRef()
    const onChange =()=>{
        selectForm(dropDownValue.current.value)
    }
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add to Which Catagory</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <p>Where do you want to add this task? </p>
                   <select ref={dropDownValue} onChange={onChange}  defaultValue={'Work'}>
                       <option value='Work' selected >Work</option>
                       <option value='Personal'>Personal</option>
                       <option value='Gaming'>Gaming</option>
                   </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={(event)=>{
                        onHide()
                        add(event)}}>
                        ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
AddModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    selectForm: PropTypes.func.isRequired, 
    add: PropTypes.func.isRequired,
}

export default AddModal;
