import React, { useState } from "react";
import Data from "./Data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
const List = () => {
  const [people, setPeople] = useState(Data);
  const handleDeletePerson = (id) => {
    const newPeople = people.filter((obj) => {
      return obj.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <Container fluid className="p-3">
      <Card
        className="card rounded bg-dark text-white text-center justify-content-center m-auto"
        style={{ width: "25rem" }}
      >
        <Card.Body style={{ width: "25rem" }}>
          <Card.Title className="m-4">
            <h3>{people.length} Birthdays Today</h3>
          </Card.Title>
          {people &&
            people.map((person) => (
              <div className="d-flex justify-content-between m-3">
                <Card.Img
                  src={person.image}
                  className="rounded-circle p-3 w-50"
                />
                <Card.Text className="p-3 m-3">
                  {person.name}
                  <p className="m-3">{person.age}</p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => handleDeletePerson(person.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </Card.Text>
              </div>
            ))}
          <div className="justify-content-center m-auto">
            {people.length > 0 ? (
              <Button
                variant="primary"
                className="btn btn-md fw-bold p-3 w-100"
                onClick={() => setPeople([])}
              >
                Clear All
              </Button>
            ) : (
              <Button
                variant="primary"
                className="btn btn-md fw-bold p-3 w-100"
                onClick={() => setPeople(Data)}
              >
                Add All
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default List;
