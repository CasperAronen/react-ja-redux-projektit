import Part from './Part.js'


const Content = ({course} ) => {
    console.log(course)
    return(
        <div>
        <h1>{course.name}</h1>
        <hr></hr>
            <p>Content toimii</p>
            <hr></hr>
            <Part course={course}/>
            <hr></hr>
        </div>
    )
}
export default Content