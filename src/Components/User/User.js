import './CSS/User.css';

const User = (props) => {
// const User = props => { does the same thing
    console.log(props);
    //props cannot be change are immutable
    //this.props.name = 'Akanbi';
return (
    <div>
    <h1> Hello {props.name}</h1>
    {props.children} 
    {/* must be wrapped in parent element */}
    </div>
    )
}

export default User;