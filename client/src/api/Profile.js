const BASE_URL = 'https://buckbuster.onrender.com/api'

export const getUsersOrders = async () => {
    const token = localStorage.getItem("token")
    const user_id = localStorage.getItem("user_id")
    try {
        const response = await fetch(`${BASE_URL}/${user_id}`, { 
            method: "GET",
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            }

        })
        const result = await response.json()
        return result

    } catch (error) {
      console.log(error)
    }
}