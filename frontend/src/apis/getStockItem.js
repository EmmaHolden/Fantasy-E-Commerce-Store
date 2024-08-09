const API_URL = process.env.REACT_APP_API_URL

export const getStockItem = async (id) => {
    const response = await fetch(`${API_URL}/stock/item/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"            
        }
    })
    
    const json = await response.json()
    return json
}