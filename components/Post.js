import React ,{ useState ,useEffect} from 'react'
import axios from "axios";
import { Card, CardBody ,Avatar ,Button ,HeartIcon  } from '@windmill/react-ui'
import useCommentResources from '../hooks/useCommentResources'
import Comment from './Comment'
import addCommentModal from './addCommentModal'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

export default function Post({info,body,creator,created_at, id}) {
  
  const [state, setState] = useState([]);
  const [show , setShow]=useState(false)
  const  {resources,createResource}= useCommentResources()
  useEffect(() => {
    let config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      url: `/register/${creator}`,
    };
    
    axios(config).then((res) => {
      let data = res.data;
      setState(data);
    });
  }, []);



  let userdata = JSON.parse(localStorage.getItem('userData'))
  const handleSubmit = async e => {

      e.preventDefault();
      let data = {
          comment: e.target.comment.value,
          creator: userdata.user.id,
          on_post: [id],

      }
      createResource(data)
    
  }

  const handleClose = () => setShow(false);
  const addComment = () => setShow(true);

  function HandleShow(arg){
  
    setShow(arg)
    
  }


    return (
        <div>
<Card className="rounded-lg ">
  <CardBody className=''>
    <div className="flex">
      <Avatar  className='w-1/12 ' size="small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTq0jPFfZ5xBOpu5GRcdO6bXodvptaTca02g&usqp=CAU" alt="Judith" />
      <div className="ml-2">
        <p className="font-semibold dark:text-gray-300">{state.username}</p>
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
        <Button onClick={addComment} size="small" className="ml-2">
          Add comment
        </Button>
        <ul key={id}>
        {resources&& resources.map((items,idx)=>{
            if (items.on_post == id){
              return (
                <>
                <li key={idx}>
                  
                <Comment creator={items.creator} created_at={items.created_at} comment={items.comment} />
                
                  
                  </li>
                </>
              )
            }
            
          })}
        </ul>
        {console.log('this is show',show)}
        
        
      </div>
    </div>
  </CardBody>
</Card>
{/* {show && <addCommentModal show={show} handleClose={handleClose} postid={id}/>} */}
<div>

<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={(e) => { handleSubmit(e) }}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control name="comment" as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit" variant="primary">Save changes</Button>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
            Save Changes
        </Button>
    </Modal.Footer>
</Modal>

</div>

 
        </div>
    )
}


