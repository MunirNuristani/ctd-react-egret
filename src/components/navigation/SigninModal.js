import React from 'react'
import { Modal, Button, Form, Row } from 'react-bootstrap'
import {  } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import './style.css'

function SigninModal({ show, onHide }) {

  return (

    <>
      <Modal
        show={show}
        onHide={onHide}
        
      >
        <Modal.Header closeButton className="border-bottom-0">
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        
          <Form className='mb-2 mx-auto d-flex flex-column justify-content-center align-items-center'>
            <Form.Group className="signInForm-email-block" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" className='w-100 ml-0'/>

            </Form.Group>
            <Form.Group className="signInForm-password-block" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*********" />
              <small className=""><u>Forgot password</u></small>
            </Form.Group>
            <Form.Group className="mb-12" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Form.Group>
              <Row className="d-flex flex-row justify-content-center">
                <GoogleButton type="light" />
              </Row>
            </Form.Group>
          </Form>

        <Modal.Footer className="border-top-0">
          <Button variant="primary" className="w-100" onClick={onHide}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SigninModal
