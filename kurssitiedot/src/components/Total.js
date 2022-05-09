

const Total = ({ course }) => {
    const Total = course.parts.reduce((ammount, num)=>{
    return ammount+ num.exercises;
},0);
    return(
        <p>total of {Total} exercises</p>
    )
}
export default Total;
