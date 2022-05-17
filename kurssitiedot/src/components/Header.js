import Content from './Content'

const Header = ( {course} )  => {
    console.log(course)
    return(
        <div>
        <p className = "posa">Toimii Header</p>
        <Content course={course}/>
        </div>
    )
}

export default Header; 