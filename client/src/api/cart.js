const BASE_URL = 'https://buckbuster.onrender.com/api'
//const response = await fetch(`${BASE_URL}/cart/1`)

export const getUsersCart = async () => {
    const user_id = localStorage.getItem("user_id")

    try {
const response = await fetch(`${BASE_URL}/cart/${user_id}`, {
    headers: {
        'Content-Type': 'application/json'
    }
});

const result = await response.json()
console.log(result)
return result
    } catch (err) {
        console.error(err)
    }
}

             //submitOrder       (user_id)
export const removeItem = async (product_id) => {
    const user_id =localStorage.getItem("user_id")

    try {
        const response = await fetch(`${BASE_URL}/cart/${user_id}/${product_id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json()
        console.log(result)
        return result
    }   catch (err) {
        console.error(err)
    }
}