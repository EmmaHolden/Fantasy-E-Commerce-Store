const API_URL = process.env.REACT_APP_API_URL


export const editStock = async (item) => {
    const response = await fetch(`${API_URL}/stock/item/${item._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({numberInStock: item.numberInStock})
    });
  
    const json = await response.json();
    return json;
  };