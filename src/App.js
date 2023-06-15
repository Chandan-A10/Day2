import { createContext, useEffect, useState } from "react";
import Service from "./services/service";
import { Layout } from 'antd';
import './styles/content.css'
import LeftDisplay from './components/LeftDisplay';
import RightDisplay from './components/RightDisplay';

export const Context=createContext('')
const App=()=> {
  const [data, setdata] = useState('')
  const loc=(x,y)=>{
    console.log(x,y)
    Service(x,y).then((a)=>{
      setdata(a)
    })
  }
  useEffect(()=>{
    let lat=0,lon=0;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        lat=pos.coords.latitude
        lon=pos.coords.longitude
        Service(lat,lon).then((x)=>{
          setdata(x)
        })
      })
    }
},[])
  const {Sider,Content}=Layout
  return (
    <>
    <div className='container'>
    <Context.Provider value={data}>
    <Layout className='layout'>
      <Sider width='315' className='side' style={{background:"transparent",textAlign:'center'}}>
      <LeftDisplay loc={loc}></LeftDisplay>
      </Sider>
      <Content className='content'>
        <RightDisplay></RightDisplay>
      </Content>
    </Layout>
    </Context.Provider>
    </div>
    </>
  );
}

export default App;
