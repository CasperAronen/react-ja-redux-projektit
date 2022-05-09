import Header from './Header'


const Course = ( {course}  ) => {
    console.log(course)
    return(
        <div>
        <hr></hr>
        <p>Course toimii</p>
        <hr></hr>
        <Header course={course}/>
        
        </div>
    )
}
export default Course