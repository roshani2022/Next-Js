import Link from "next/link";
function AboutUs  () {
  
  const   details = [
        { id : 1, name: 'Yash', role: 'Senior Developer'},
          { id : 2, name: 'Vaibhav', role: 'Backend Developer'}, 
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
    return(
      <>
      <h1>This is a AboutUs page.</h1>
      <ul>
        {details.map((detail,index)=>(
            <li key={index}>
                <Link href={`/aboutus/${detail.id}`}>
               <strong>Name:</strong> {detail.name}
               </Link>
            </li>
))}
      </ul>
      </>
    ) 
 }
 
 export default AboutUs;