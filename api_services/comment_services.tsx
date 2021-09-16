import axios from "axios"
import { getAllCommentsByPostURL, getAllCommentsURL } from "../constants/apiConstants"

export const getAllComments = () => {
    return new Promise((resolve, reject) => {
        axios.get(getAllCommentsURL)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    })
}

export const getAllCommentsByPost = (id: number) => {
    return new Promise((resolve, reject) => {
        axios.get(getAllCommentsByPostURL(id))
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    })
}