import Container from "react-bootstrap/Container"
import SearchSection from "./SearchSection"
import ItemsSection from "./ItemsSection"
import { useState } from "react"


export default function Home(){
    const [search, setSearch] = useState("")

    return (
        <Container className="p-0 d-flex flex-column" fluid>
            <SearchSection 
                search={search}
                setSearch={setSearch}
            />

            <ItemsSection 
                search={search}
            />
        </Container>
    )
}