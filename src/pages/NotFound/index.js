import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, House, Person } from "react-bootstrap-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f8f9fa;
  text-align: center;
  padding: 40px 20px;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: #ffe600;
  margin: 0;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const ErrorMessage = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #2c3e50;
  margin: 20px 0 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 40px;
  max-width: 500px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &.primary {
    background: linear-gradient(135deg, #ffe600 0%, #ffeb3b 100%);
    border: none;
    color: #2c3e50;

    &:hover {
      background: linear-gradient(135deg, #ffeb3b 0%, #ffe600 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 230, 0, 0.3);
    }
  }

  &.secondary {
    background: #fff;
    border: 2px solid #e9ecef;
    color: #6c757d;

    &:hover {
      background: #f8f9fa;
      border-color: #adb5bd;
      color: #495057;
    }
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Sahifa topilmadi</ErrorMessage>
      <Description>
        Kechirasiz, siz qidirayotgan sahifa mavjud emas. 
        Manzilni tekshirib ko'ring yoki bosh sahifaga qayting.
      </Description>
      
      <ButtonGroup>
        <StyledButton 
          className="primary"
          onClick={() => navigate("/login")}
        >
          <Person size={18} />
          Login
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
}
