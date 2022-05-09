import Content from './Content'

const Header = ( {course} )  => {
    console.log(course)
    return(
        <div>
        <p>Toimii Header</p>
        <Content course={course}/>
        </div>
    )
}

export default Header; 