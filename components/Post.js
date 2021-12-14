import React ,{ useState ,useEffect} from 'react'
import axios from "axios";
import { Card, CardBody ,Avatar ,Button ,HeartIcon  } from '@windmill/react-ui'
export default function Post({info,body,creator,created_at, id}) {
  const [state, setState] = useState([]);
  const [show , setShow]=useState(false)
  // useEffect(() => {
  //   let config = {
  //     method: "get",
  //     baseURL: process.env.NEXT_PUBLIC_API_URL,
  //     url: "/register/",
  //   };
  //   axios(config).then((res) => {
  //     let data = res.data;
  //     setState(data);
  //   });
  // }, []);
  // let creator_name = state.map(ele=>{
  //   if(ele.id == creator){
  //     return ele.username
  //   } 
  // })
  // function HandleShow(arg){
  
  //   setShow(arg)
    
  // }
    return (
        <div>
<Card className="rounded-lg ">
  <CardBody className=''>
    <div className="flex">
      <Avatar  className='w-1/12 ' size="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq0jPFfZ5xBOpu5GRcdO6bXodvptaTca02g&usqp=CAU" alt="Judith" />
      <div className="ml-2">
        <p className="font-semibold dark:text-gray-300">{creator}</p>
        <p className="text-xs text-gray-500">{created_at}</p>
      </div>
    </div>
    <p className="my-2 dark:text-black-300">
    {body}
    </p>
    <div className="flex items-end justify-between">
      <div>
        <Button onClick='' size="small" type="neutral">Read more</Button>
      </div>
      <div>
        <Button size="small" icon={HeartIcon} layout="link" aria-label="Like" className='like' > &hearts; </Button>
        <Button size="small" className="ml-2">
          comments
        </Button>
        {/* <ul key={id}>
        {comment&& comment.map((items,idx)=>{
            if (items.on_post == id){
              return (
                <>
                <li key={idx}>
                  
                <div key={idx+idx}>{items.creator}</div>
                <div key={idx+idx+idx}>{items.created_at}</div>
                <div key={idx+idx+idx+idx}>{items.comment}</div>
                
                  
                  </li>
                </>
              )
            }
            
          })}
        </ul> */}
        
      </div>
    </div>
  </CardBody>
</Card>
 
        </div>
    )
}


