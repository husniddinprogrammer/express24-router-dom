import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { PersonCircle, List } from "react-bootstrap-icons";

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

export default function Header() {
  return (
    <HeaderBar>
      <List size={22} />
      <User>
        <PersonCircle size={22} />
        Axror
      </User>
    </HeaderBar>
  );
}
