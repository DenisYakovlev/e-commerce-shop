import Pagination from "react-bootstrap/Pagination"


export default function ObjPagination({links, currentPage, setPage}){
    const pageRange = Array.from({length: links.page_count}, (_, index) => index + 1)

    return (
        <Pagination className="p-3 d-flex justify-content-center gap-2" size="sm">
            <Pagination.Prev
                onClick={() => setPage(links.prev_page)} 
                disabled={!links.prev_page}
            />

            {pageRange.map(page => 
                <Pagination.Item
                    key={page}
                    onClick={() => setPage(page)}
                    active={page == currentPage}
                >
                    {page}
                </Pagination.Item>
            )}
            
            <Pagination.Next 
                onClick={() => setPage(links.next_page)} 
                disabled={!links.next_page}
            />
        </Pagination>
    )
}