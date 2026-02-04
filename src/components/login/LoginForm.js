import styled from "styled-components";
import { Form } from "react-bootstrap";
import { Person, Lock } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import {login} from "../../redux/actions/loginAction";
import { useDispatch } from "react-redux";
 
const Title = styled.h4`
  text-align: center;
  font-weight: 600;
  margin-bottom: 24px;
  font-size: 24px;
`;

const Group = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #555;
  margin-bottom: 6px;
  display: block;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
`;

const Icon = styled.div`
  color: #999;
  margin-right: 8px;
`;

const Input = styled(Form.Control)`
  border: none;
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  &:focus {
    box-shadow: none;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 30px;
  padding: 10px;
  font-weight: 600;
  color: black;
  margin-top: 24px;
  background: linear-gradient(315deg, #FCF085, #FAFC47);
`;

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Title>Login</Title>

      <Group>
        <Label>Username</Label>
        <InputWrapper>
          <Icon><Person /></Icon>
          <Input placeholder="Type your username" />
        </InputWrapper>
      </Group>

      <Group>
        <Label>Password</Label>
        <InputWrapper>
          <Icon><Lock /></Icon>
          <Input type="password" placeholder="Type your password" />
        </InputWrapper>
      </Group>

      <Button onClick={() => {
        dispatch(login());
        navigate("/");
      }}>LOGIN</Button>
    </>
  );
}
