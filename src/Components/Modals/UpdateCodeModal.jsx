import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Edit from '../../Pages/Editors/UpdateRunnerEditor'

const UpdateMod = (props) => {
  const { buttonLabel, className, funk, route,langy, rtid } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <div dialogClassName="custom-modal"
    bsClass="my-modal"
    className='custom-modal'>
      <Button className="p-3 mr-5 mt-4" color="secondary" onClick={toggle} block>
        {buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        external={externalCloseBtn}
      >
        <ModalHeader>Edit Your R.A.D. Route!</ModalHeader>
        <ModalBody>
          <Edit fnk={funk} rt={route} rtid={rtid} langy={langy}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primaryGrad" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UpdateMod;
