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
                <a href="/aboutus/1">
               <strong>Id:</strong> {detail.id}, <strong>Name:</strong> {detail.name}, <strong>Role:</strong> {detail.role}
               </a>
            </li>
))}
      </ul>
      </>
    ) 
 }
 
 export default AboutUs;