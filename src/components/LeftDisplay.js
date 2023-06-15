import { Card,Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {Context} from "../App";
import { useContext } from "react";
import Location from "../services/location";

const LeftDisplay=(props)=>{
    const val=useContext(Context)
    console.log(val)
    const handleClick=(e)=>{
        if(e.target.value.trim()!==''){
            Location(e.target.value).then((res)=>{
                console.log(res.data[0])
                props.loc(res.data[0].lat,res.data[0].lon)
            })
            .catch((err)=>console.log(err))
        }
        else{
            console.log('error')
        }
    }
    return(
        <>
        {val?
        <div className="display">
            <Input style={{background:'white'}} className='input' placeholder="Search City" prefix={<SearchOutlined/>} onPressEnter={handleClick}>    
            </Input>
              <Card headStyle={{color:'white',fontSize:'36px'}}
                    bordered={false} className="card" title={val.data.name} >
            </Card>
        </div>:<div>Loading</div>
        
    }
        </>
    )
}
export default LeftDisplay