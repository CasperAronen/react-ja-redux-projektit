import Part from './Part.js'


const Content = ({course} ) => {
    console.log(course)
    return(
        <div>
        <h1>{course.name}</h1>
        <hr></hr>
            <p className = "posa">Content toimii</p>
           
            <Part course={course}/>
            <hr></hr>
        </div>
    )
}
export default Content