import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import DataTable from '../DataTable/DataTable';
import { UrlData } from '../../interface/UrlData';
import axios from 'axios';
import {serverUrl} from '../../helpers/Constants'

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data,setData]=React.useState<UrlData[]>([])
  const fetchTableData=async()=>{
    const response=await axios.get(`${serverUrl}/shortUrl`)
    console.log("The response from the server is",response)
    setData(response.data);
  }
  React.useEffect(()=>{
    fetchTableData()
  },[])
  return (
    <div>
       <FormContainer/>
       <DataTable data={data}/>
    </div>
  )
};

export default Container;
