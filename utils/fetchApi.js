import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key":
                "81ec41cbf1msh191cdaf4f83dbb9p17496djsn96965f44d862",
        },
    });

    return data
};
