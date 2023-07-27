const BASE_URL = 'https://buckbuster.onrender.com/api';

export const getSingleProduct = async (product_id) => {

    try {
        const response = await fetch(
            `${BASE_URL}/${product_id}`, {
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

export const getProductReview = async (product_id) => {
    try {
        const response = await fetch(
        `${BASE_URL}/${product_id}/reviews`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json()
        return result
    } catch (err) {
        console.error(err)
    }
}