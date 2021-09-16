import axios from "axios"
import { getAllPostsURL } from "../constants/apiConstants"

export const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        axios.get(getAllPostsURL)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    })
}