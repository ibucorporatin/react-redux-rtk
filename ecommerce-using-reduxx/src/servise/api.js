import axios from "axios";

const url = "https://fakestoreapi.com";

export const getProducts =async()=>{
        try {
          return  axios.get(`${url}/products`)
        } catch (error) {
            console.log("error while getting the product")
        }
}