import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { helpClose } from '../store/help/action';

const HelpModal = () => {
    const dispatch = useDispatch();
  
    const {
        helpModalShow,
    } = useSelector((state) => ({
        helpModalShow: state.help.helpModalShow,
    }));
  
    return (
        <Modal
          show={helpModalShow}
          onHide={() => dispatch(helpClose())}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Filter
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form cassName=''>

                </Form>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    Ok
                </Button>
            </Modal.Footer>
            </Modal.Body>
        </Modal>
    );
  };
  
  export default HelpModal;