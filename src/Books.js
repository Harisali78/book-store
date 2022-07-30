const Books = (props) => {
    console.log(props);
    const {myImage, title, author, id} = props.random
    // let a = 10;
    // let b = a;
    // console.log(b);
    return (
        <div className='books'>
            {/* <img src={props.random.myImage} alt="" />
            <h3>{props.random.title}</h3>
            {props.children}
            <h5>{props.random.author}</h5> */}
            <h3>{id}</h3>
            <img src={myImage} alt="" />
            <h3>{title}</h3>
            {props.children}
            <h5>{author}</h5>
        </div>
    )
}
export default Books