import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const Wrapper = styled.div`
  max-width: 600px;
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
  width: 100%;
  
  &:focus {
    border-color: #ffe600;
    box-shadow: 0 0 0 0.2rem rgba(255, 230, 0, 0.25);
    outline: none;
  }
  
  &::placeholder {
    color: #adb5bd;
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

export default function CategoryForm() {
  return (
    <>
        <StyledInput
          placeholder="Kategoriya nomi"
          size="lg"
        />

        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Submit>
            Qo'shish
          </Submit>
        </div>
    </>
  );
}
