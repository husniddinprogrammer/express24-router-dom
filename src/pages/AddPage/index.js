import { useState } from "react";
import styled from "styled-components";
import FoodForm from "./FoodForm";
import CategoryForm from "./CategoryForm";
import AddTabs from "./AddTabs";

const Container = styled.div`
  padding: 28px 32px;
`;

export default function AddPage() {
  const [active, setActive] = useState("category");

  return (
    <Container>
      <AddTabs active={active} setActive={setActive} />

      {active === "category" ? <CategoryForm /> : <FoodForm />}
    </Container>
  );
}
