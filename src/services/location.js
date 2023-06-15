import axios from "axios"

const Location=(name)=>{
    return(
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=35708eebf1110c561245c589660380f8`).then((res)=>{
            return res;
        })
        .catch(err=>console.log(err))
    )
}

export default Location