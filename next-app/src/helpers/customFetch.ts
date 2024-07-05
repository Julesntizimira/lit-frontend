import axios from "axios";

export default async function customFetch (route: string, msg: string, setState: any) { 
    try {
        const response = await axios.get(route);
        setState(response.data);
        return(response.data);
    } catch (error) {
        console.log(msg + error);
    }
}