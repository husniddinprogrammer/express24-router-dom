import styled from "styled-components";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Plus, Image, TextRight, Justify } from "react-bootstrap-icons";

const Wrapper = styled.div`
  max-width: 800px;
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border: 1px solid #e9ecef;
`;


const StyledInput = styled(Form.Control)`
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #ffe600;
    box-shadow: 0 0 0 0.2rem rgba(255, 230, 0, 0.25);
    outline: none;
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

const StyledTextarea = styled(Form.Control)`
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  transition: all 0.3s ease;
  resize: vertical;
  
  &:focus {
    border-color: #ffe600;
    box-shadow: 0 0 0 0.2rem rgba(255, 230, 0, 0.25);
    outline: none;
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

const StyledSelect = styled(Form.Select)`
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 15px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #ffe600;
    box-shadow: 0 0 0 0.2rem rgba(255, 230, 0, 0.25);
    outline: none;
  }
`;

const InputGroup = styled.div`
  position: relative;
  
  .input-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #adb5bd;
    z-index: 5;
  }
  
  .with-icon {
    padding-left: 45px;
  }
`;

const Submit = styled(Button)`
  background: linear-gradient(135deg, #ffe600 0%, #ffeb3b 100%);
  border: none;
  font-weight: 600;
  padding: 12px 48px;
  margin-top: 32px;
  border-radius: 8px;
  font-size: 16px;
  color: #2c3e50;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: linear-gradient(135deg, #ffeb3b 0%, #ffe600 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 230, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default function FoodForm() {
  return (
    <Wrapper>
      
      <Row className="g-3 mb-4">
        <Col>
          <StyledInput
            placeholder="Rasmga yo'li"
          />
        </Col>
        <Col>
          <StyledInput
            placeholder="Taom nomi"
            size="lg"
          />
        </Col>
      </Row>

      <InputGroup className="mb-4">
        <StyledTextarea
          as="textarea"
          rows={4}
          placeholder="Taom haqida qisqacha ta'rif..."
        />
      </InputGroup>

      <Row className="g-3">
        <Col>
            <StyledInput
              placeholder="Narxi"
              type="number"
            />
        </Col>
        <Col>
          <StyledSelect>
            <option value="">Kategoriyani tanlang</option>
            <option value="osh">Osh</option>
            <option value="manti">Manti</option>
            <option value="lavash">Lavash</option>
            <option value="shashlik">Shashlik</option>
            <option value="salad">Salat</option>
          </StyledSelect>
        </Col>
      </Row>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Submit>
          Qo'shish
        </Submit>
      </div>
    </Wrapper>
  );
}
