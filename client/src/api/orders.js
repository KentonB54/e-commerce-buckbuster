const BASE_URL = 'https://buckbuster.onrender.com/api'

export const submitOrder = async (user_id) => {
 
    try {
        const response = await fetch(`${BASE_URL}/${user_id}`, { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'  
            }

        })
        const result = await response.json()
        return result

    } catch (error) {
      console.log(error)
    }
}

