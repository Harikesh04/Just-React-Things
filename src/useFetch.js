import React, { useEffect, useState } from "react";

function useFetch(params) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] =useState(true);

   useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(params.url, {
                    method: params.method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(params.body),
                });
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [params]);

    return { data, error, loading };
    
}