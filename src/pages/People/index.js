import styled from "styled-components";
import { Table } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  margin-bottom: 24px;
  background: #fff;
`;

const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 13px;
  color: #6c757d;
  margin: 0;
`;

const StyledTable = styled(Table)`
  font-size: 14px;
  margin-bottom: 10px;

  thead th {
    font-size: 13px;
    font-weight: 500;
    color: #adb5bd;
    border-bottom: 1px solid #e9ecef;
    padding: 12px 8px;
  }

  tbody td {
    padding: 14px 8px;
    border-bottom: 1px solid #f1f3f5;
    vertical-align: middle;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  max-width: 700px;
  padding-top: 8px;
`;


export default function People() {
  const mainData = useSelector(state => state.mainData);

  return (
    <Wrapper>
      <Title>Foydalanuvchilar</Title>
      <Description>
        Rollarni biriktirishingiz mumkin
      </Description>
      <StyledTable responsive >
        <thead>
          <tr>
            <th>#</th>
            <th>To‘liq ismi</th>
            <th>Telefon raqami</th>
            <th>Roll</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {mainData.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.phone}</td>
              <td>{order.roll}</td>
              <td>
                <Pencil size={16} color="#6c757d" style={{cursor: 'pointer', marginRight: '8px'}} />
                <Trash size={16} color="#dc3545" style={{cursor: 'pointer'}} />
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <Footer>
        <span>Jami</span>
        <span>{mainData.length} ta foydalanuvchi</span>
      </Footer>
    </Wrapper>
  );
}
