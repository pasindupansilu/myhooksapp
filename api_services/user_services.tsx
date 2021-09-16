import axios from "axios"
import { getAllUsersURL } from "../constants/apiConstants"

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        axios.get(getAllUsersURL)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    })
}