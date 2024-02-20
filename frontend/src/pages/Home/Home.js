import SearchSection from "./SearchSection"
import { useState } from "react"


export default function Home(){
    const [search, setSearch] = useState("")

    return (
        <>
            <SearchSection 
                search={search}
                setSearch={setSearch}
            />
            
        </>
    )
}