const BASE_URL = "https://buckbuster.onrender.com/api";

export const getAllProducts = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/products`, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            const result = await response.json()
            
            return result
    } catch (error) {
      console.error(error)
    }
     
}

export const addProductToUsersCart = async (product_id, user_id) => {
    
  try {
      const response = await fetch (`${BASE_URL}/cart`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user_id,
              product_id
          })
      })

      const result = await response.json()
      return result

  } catch (err) {
      console.error(err)
  }
}