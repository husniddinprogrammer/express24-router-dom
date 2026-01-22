import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Sub = styled.p`
  font-size: 13px;
  color: #6c757d;
  margin: 0;
`;


const Tabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const Tab = styled.button`
  border: none;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: 500;
  background: ${({ active }) => (active ? "#ffe600" : "transparent")};
  box-shadow: ${({ active }) =>
    active ? "0 2px 6px rgba(0,0,0,.15)" : "none"};
`;

export default function AddTabs({ active, setActive }) {
  return (
    <>
    <Wrapper>
      <Title>Qo‘shish</Title>
      <Sub>Yangi kategoriya/taom qo‘shish</Sub>
    </Wrapper>
    <Tabs>
      <Tab active={active === "category"} onClick={() => setActive("category")}>
        Kategoriya
      </Tab>
      <Tab active={active === "food"} onClick={() => setActive("food")}>
        Taom
      </Tab>
    </Tabs>
    </>
  );
}
