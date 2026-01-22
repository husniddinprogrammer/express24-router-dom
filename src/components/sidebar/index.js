import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  Plus,
  ArrowClockwise,
  CheckLg,
  People,
} from "react-bootstrap-icons";

const Wrapper = styled.div`
  width: 260px;
  min-height: 100vh;
  background: #fffbe6;
  padding: 20px;
  border-right: 1px solid #eee;
`;

const Logo = styled.h5`
  font-weight: 700;
  margin-bottom: 30px;
`;

const StyledNav = styled(Nav)`
  gap: 10px;
`;

const NavItem = styled(Nav.Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none !important;
  .link {
    display: block;
    width: 100%;
    color: #333 !important;
    font-weight: 500;
    text-decoration: none !important;
  }
  &.active {
    background: #ffe066;
  }

  &:hover {
    background: #fff3bf;
  }
`;

export default function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Wrapper>
      <Logo>EXPRESS 24</Logo>

      <StyledNav className="flex-column">
        <NavItem active={isActive('/orders')}>
          <Link className="text-light link" to="/orders"><ArrowClockwise size={18} />
 Arizalar</Link>
        </NavItem>
        <NavItem active={isActive('/delivered')}>
          <Link className="text-light link" to="/delivered"><CheckLg size={18} /> Yetkazilgan</Link>
        </NavItem>
        <NavItem active={isActive('/add')}>
          <Link className="text-light link" to="/add"><Plus /> Qo'shish</Link>
        </NavItem>
        <NavItem active={isActive('/people')}>
          <Link className="text-light link" to="/people"><People size={18} />Foydalanuvchilar</Link>
        </NavItem>
      </StyledNav>
    </Wrapper>
  );
}
