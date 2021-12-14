import React from 'react'
import { useRouter } from 'next/router'
// export const getStaticPath =async () =>{
//     const res = await fetch('http://127.0.0.1:8000/register/')
//     const data =await res.json()

//     const paths = data.map(item => {
//         return {
//             params: {id: item.id.toString()}
//         }
            
        
//     })
//     return {
//         path:paths
//     }
// }


export default function () {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
           
        </div>
    )
}
