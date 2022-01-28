import { useEffect, useState } from "react"
const UseFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const UseFetch = () => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setLoading(false)
                setData(json)
            })
    };
    useEffect(() => {
        UseFetch();
    }, []);
    return { loading, data }
};
export default UseFetch