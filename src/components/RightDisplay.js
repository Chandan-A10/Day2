import { Card} from "antd";
import {Context} from '../App'
import { useContext } from "react";
import cloud from "../images/cloud.jpg";
import storm from "../images/storm.jpg";
import fair from "../images/fair.jpg";
import raincloud from "../images/raincloud.jpg";
const RightDisplay=()=>{
    const val=useContext(Context)
    const handle=()=>{
        switch(val.data.weather[0].main){
            case "Rain":
                document.body.style.backgroundImage = `url(${raincloud})`;
              break;
            case "Clouds":
                document.body.style.backgroundImage = `url(${storm})`;
              break;
            case "Clear":
                document.body.style.backgroundImage=`url(${fair})`
              break;
            default:
                document.body.style.backgroundImage = `url(${cloud})`
              break;
          }
    }
    return(
        <>
        {(val)?
        <div className="rdisplay">
            {handle()}
            <Card className="rcard" bodyStyle={{color:"white",fontSize:'100px'}} bordered={false}>{Math.round(val.data.main.temp-273.15)}°C</Card>
            <Card className="r2card" bodyStyle={{color:"white",fontSize:'50px'}} bordered={false}>{val.data.weather[0].main}</Card>
            <Card className="r3card" bodyStyle={{color:"white",fontSize:'40px'}} bordered={false}>Wind Speed: {val.data.wind.speed} m/h</Card>
            <Card className="r4card" bodyStyle={{color:"white",fontSize:'35px'}} bordered={false}>Humidity: {val.data.main.humidity} m/m</Card>
            <Card className="r5card" bodyStyle={{color:"white",fontSize:'30px'}} bordered={false}>Pressure: {val.data.main.pressure} hPa</Card>
        </div>
        
    :<h1>Loading</h1>}

        </>
    )
}
export default RightDisplay