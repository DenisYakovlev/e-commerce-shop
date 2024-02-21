import { useContext } from "react"
import { UserContext } from "../context"
import { API_BASE_URL } from "../constants"

export default function useApi(){
    const { user } = useContext(UserContext)

    const publicFetch = async (url, params) => {
        const _url = `${API_BASE_URL}/${url}`
        const _params = {
            ...params,
            headers: {
                "Content-type": "application/json",
                ...params?.headers,
            },
        }

        return await fetch(_url, _params)
        .then(response => {
            if(response.ok){
                return response.json()
            }

            return response.json().then(data => {throw new Error(JSON.stringify(data))})
        })
    }

    const authFetch = async (url, params) => {
        const _url = `${API_BASE_URL}/${url}`
        const _params = {
            ...params,
            headers: {
                "Content-type": "application/json",
                ...params?.headers,
                "Authorization": `Token ${user}`
            },
        }

        return await fetch(_url, _params)
        .then(response => {
            if(response.ok){
                return response.json()
            }

            return response.json().then(data => {throw new Error(JSON.stringify(data))})
        })
    }

    return { publicFetch, authFetch }
}