import Header from './Header'
import Total from './Total'

const Course = ( {course}  ) => {
    console.log(course)
    return(
        <div>
        <hr></hr>
        <p className="posa">Course toimii</p>
        <hr></hr>
        <Header course={course}/>
        <Total key={course.id} course={course}/>
        </div>
    )
}
export default Course