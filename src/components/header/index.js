import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { PersonCircle, List, BoxArrowRight } from "react-bootstrap-icons";
import { useContext } from "react";
import { LoginContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/loginAction";

const HeaderBar = styled(Navbar)`
  background: #ffffff;
  border-bottom: 1px solid #eee;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(220, 53, 69, 0.1);
    color: red;
  }
`;

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const state = useSelector((state) => state);
  console.log(state);
  

  return (
    <HeaderBar>
      <List size={22} />
      <User>
        <PersonCircle size={22} />
        Axror
        <LogoutButton onClick={handleLogout}>
          <BoxArrowRight size={22} />
        </LogoutButton>
      </User>
    </HeaderBar>
  );
}
