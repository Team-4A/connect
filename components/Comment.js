
import React ,{ useState ,useEffect} from 'react'
import axios from "axios";

export default function Comment({comment,created_at,creator,userId}) {
    const [state, setState] = useState([]);
    const [indicator, setIndicator] = useState(0);


    useEffect(async () => {
      let config = {
        method: "get",
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        url: `/register/${creator}`,
      };
      
      await axios(config).then((res) => {
        let data = res.data;
        setState(data);
      });
    }, []);




    return (
        <div className=''>

           <p>{state.username}</p>
            <p>{created_at.slice(0,10)}</p>
            <p>{comment}</p>

        </div>
    )
}
