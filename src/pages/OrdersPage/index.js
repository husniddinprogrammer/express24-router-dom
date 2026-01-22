import styled from "styled-components";
import { Table } from "react-bootstrap";
import { ordersData } from "../../data/ordersData";

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


export default function OrdersTable() {
  return (
    <Wrapper>
      <Title>Arizalar</Title>
      <Description>
        Yetib kelgan arizalarni kuzatishingiz mumkin
      </Description>
      <StyledTable responsive >
        <thead>
          <tr>
            <th>#</th>
            <th>To‘liq ismi</th>
            <th>Taom nomi</th>
            <th>Narxi</th>
            <th>Soni</th>
            <th>Umumiy narx</th>
            <th>Telefon raqami</th>
            <th>Izoh</th>
          </tr>
        </thead>

        <tbody>
          {ordersData.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.product}</td>
              <td>{order.price.toLocaleString()}</td>
              <td>{order.quantity}</td>
              <td>{order.total.toLocaleString()}</td>
              <td>{order.phone}</td>
              <td>{order.description}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <Footer>
        <span>Jami</span>
        <span>{ordersData.reduce((sum, order) => sum + order.total, 0).toLocaleString()} so'm</span>
      </Footer>
    </Wrapper>
  );
}
