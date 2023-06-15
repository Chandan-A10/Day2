import axios from "axios"

const Service=(lat='1.360321',lon='103.846733')=>{
    return(
        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=35708eebf1110c561245c589660380f8`).then((res)=>{
            return res;
        })
        .catch(err=>console.log(err))
    )
}

export default Service

