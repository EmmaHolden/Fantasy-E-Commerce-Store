const API_URL = process.env.REACT_APP_API_URL

export const getStock = async () => {
     let response = await fetch(`${API_URL}/stock/items`)
     let data = await response.json()
     return data
}