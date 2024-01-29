const MyList = (props) => {
    const items = props.items
    const listItems = items.map((item) => {
        if (item.clicked){
            return <li key={item.id} onClick={() => props.updateItem(item.id)} style={{textDecoration: "line-through"}}>{item.text}</li>
        } else {
            return <li key={item.id} onClick={() => props.updateItem(item.id)}>{item.text}</li>
        }
})
    return (
        <div>
            <h1>{props.header}</h1>
            <ol>{listItems}</ol>
        </div>
    )
}


export default MyList