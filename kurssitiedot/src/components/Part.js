import App from '../App'

const Part = ( {course }) =>{
    course.parts.map(parts =>{
        console.log(parts)
    })
const Name = ({course}) =>{
    course.parts.map(name =>{
        console.log(name)
    })
} 
    return(
        <p>{course.parts.nae} Part toimii</p>
    )
}

export default Part