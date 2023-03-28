import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal, Button, Form } from 'react-bootstrap';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [npm, setNpm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [age, setAge] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setAge(calculateAge(birthdate));
      setShowModal(true);
    }
    setValidated(true);
  };

  const calculateAge = (birthdate) => {
    const ageDiffMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };


  return (
    <div className="container my-5">
      <h1>Form</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="npm">
          <Form.Label>NPM</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter NPM"
            maxLength="10"
            required
            value={npm}
            onChange={(e) => setNpm(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid NPM.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="npm">
          <Form.Label>Nama depan</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Nama depan"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid first Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="mid">
          <Form.Label>Nama tengah</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Nama tengah"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="npm">
          <Form.Label>Nama Belakang</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Nama Belakang"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid last Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="birthdate">
          <Form.Label>Birthdate</Form.Label>
          <br />
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={birthdate}
            onChange={(date) => setBirthdate(date)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Form Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM   : {npm}</p>
          <p>Nama  : {firstName} {middleName} {lastName}</p>
          <p>Age   : {age}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
