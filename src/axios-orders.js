import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-builder-app-2099b-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default instance;