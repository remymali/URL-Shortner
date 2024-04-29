import * as React from 'react';
import axios from 'axios';
import {serverUrl} from '../../helpers/Constants'
interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
    const [fullUrl,setFullUrl]=React.useState<string>("");
    const handleSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            
            await axios.post(`${serverUrl}/shortUrl`,{
                fullUrl: fullUrl
            })
            setFullUrl("")
                } catch (error) {
                    console.log(error)
            
        }
    }

  return (    
       <div className='bg-banner  my-8 rounded-xl bg-cover bg-center'>
        <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'> 
        <div className='text-white  text-4xl text-center pb-4'>Shorten-Urls</div>
        <p className='text-white  text-xl text-center pb-4'>Paste your untidy link to shorten it</p>
        <p className='text-white  text-2xl font-light text-center pb-4'>Free tool to shorten your Url or reduce link, use our Url-shortner to create a neat and shorten link.</p>

        <form onSubmit={handleSubmit}>
            <div className='flex'>
                <div className='relative w-full'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>
                        UrlShortner.link/
                    </div>
                    <input 
                    type='text' 
                    placeholder='put your links' 
                    required 
                    className='w-full block p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-300'
                    value={fullUrl}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFullUrl(e.target.value)}
                    />
                </div>
                <button
        type='submit'
        className='absolute end-0 top h-14 ml-4 p-2.5 text-sm font-medium  text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'
    >
        Shorten Url
    </button>
            </div>
        </form>
        </div>
       
       </div>
    
  )
};

export default FormContainer;
