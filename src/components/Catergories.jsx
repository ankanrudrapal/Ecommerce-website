import styled from "styled-components"
import { categories } from "../Data"
import { mobile } from "../Responsive"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`

const Catergories = () => {
  return (
        <Container>
        {categories.map((item) => (
            <CategoryItem item={item}/>
        ))}
        </Container>
    )
}

export default Catergories;
