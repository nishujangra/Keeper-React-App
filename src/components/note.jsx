function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>T{props.content}</p>
        </div>
    )
}

export default Note;