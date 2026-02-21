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

//TODO: 2. Profile Page UI
//5. Update Post Page UI
//7. Refine the Users Page UI(It looks sus)
//8. Add the load more or pagination functionality to the Pages