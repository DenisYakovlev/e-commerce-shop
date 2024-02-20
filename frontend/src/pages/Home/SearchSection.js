import Container from "react-bootstrap/Container"
import { SearchBar } from "../../components"


export default function SearchSection({search, setSearch}){
    return (
        <Container className="p-0 bg-secondary justify-content-center" fluid>
            <Container 
                className="px-3 py-5 d-flex flex-column gap-3 justify-content-center align-items-center" 
                fluid="xl"
            >
                <h1 className="text-dark text-justify">
                    Пошук товару
                </h1>

                <SearchBar
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Введіть назву товару..."
                    style={{maxWidth: "100%", width: "600px"}}
                />
            </Container>
        </Container>
    )
}