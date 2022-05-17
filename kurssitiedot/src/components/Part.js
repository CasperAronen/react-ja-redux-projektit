const Part = ( {course }) =>{
    return(
        <div>
        {course.parts.map(part=>
            <div>
            <hr></hr>
            <p className = "posa">Part toimii</p>
            <label>{part.name} {part.exercises}</label>
            
            </div>
        )}
      </div>
    )
}

export default Part