import { axios } from "axios";

const  GetCreditScore = async () => {
    try {
        const response = await axios.get(`https://rose-credit-card-api.herokuapp.com/creditCard`);
        console.log(response);
        
    } catch (error) {
        console.log(error);
        alert('Something went wrong :(');
    }
}

export default GetCreditScore;
