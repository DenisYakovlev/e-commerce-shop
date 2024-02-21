import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useApi } from "../../hooks"
import { useContext, useEffect, useRef, useState } from "react"
import { AlertContext } from "../../context"
import { ItemCard, ObjPagination } from "../../components"
import { useDebouncedCallback } from 'use-debounce';
import qs from "qs"


export default function ItemsSection({search}){
    const { publicFetch } = useApi()
    const { showAlert } = useContext(AlertContext)
    const [items, setItems] = useState()
    const [page, setPage] = useState(1)
    const searchRef = useRef(search)

    const fetchItems = async () => {
        // check if search is updated
        if(searchRef.current != search){
            searchRef.current = search

            // update page if it's not first
            if(page != 1){
                setPage(1) 
                return
            }
        }

        const params = qs.stringify({
            page: page,
            "q[name_cont]": search
        })

        await publicFetch(`items?${params}`, {
            method: 'GET'
        }).then(data => {
            setItems(data)
        })
        .catch(error => {
            showAlert(error)
        })
    }

    const debounce = useDebouncedCallback(() => fetchItems(), 500)

    useEffect(() => {
        debounce()
    }, [page, search])

    return (
        <Container className="p-0 bg-primary justify-content-center" fluid>
            <Container className="px-sm-3 px-0 py-sm-5 py-3" fluid="xl">
                <Row 
                    xs={2} sm={3} md={4} lg={5}
                    className="p-0 m-0 justify-content-center"
                >
                    {items && Object.values(items.items).map(item => 
                        <Col key={item.id} className="p-3">
                            <ItemCard item={item}/>
                        </Col>
                    )}
                </Row>

                {items &&
                    <Container className="p-0 d-flex justify-content-center" fluid="xl">
                        <ObjPagination 
                            links={items.pagination}
                            currentPage={page}
                            setPage={page => setPage(page)}
                        />
                    </Container>
                }
            </Container>
        </Container>
    )
}