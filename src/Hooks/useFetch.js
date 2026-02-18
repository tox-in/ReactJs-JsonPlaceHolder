import React, { useEffect, useState } from 'react'

const useFetch = (fetchFunction) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFunction().then((responseData) => setData(responseData)).catch((error) => setError(error.message || 'Failed to fetch the data')).finally(() => setLoading(false));
    }, [fetchFunction]);


    return {data, loading, error};
}

export default useFetch

//TODO: 1. Fetch Todos By Current User
// 2. Refine the Posts UI
//3. Profile Page UI
//4. Not Found Page UI