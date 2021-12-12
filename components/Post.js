import React ,{ useState } from 'react'
import { Card, CardBody ,Avatar ,Button ,HeartIcon  } from '@windmill/react-ui'
export default function Post() {
  const [show , setShow]=useState(false)

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
        <p className="font-semibold dark:text-gray-300">Judith Ipsum</p>
        <p className="text-xs text-gray-500">@judithipsum</p>
      </div>
    </div>
    <p className="my-2 dark:text-black-300">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam
      quod? Totam exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
      dolorum.
    </p>
    <div className="flex items-end justify-between">
      <div>
        <Button onClick={HandleShow} size="small" type="neutral">Read more</Button>
      </div>
      <div>
        <Button size="small" icon={HeartIcon} layout="link" aria-label="Like" className='like' > &hearts; </Button>
        <Button size="small" className="ml-2">
          Comment
        </Button>
      </div>
    </div>
  </CardBody>
</Card>
 
        </div>
    )
}


