import {useState} from "react"
import MyList from './MyList';

const MyContainer = () => {
    const [items, setItems] = useState([
        {id: "1", text: "item1", clicked: false},
        {id: "2", text: "item2", clicked: false},
    ])


    const updateItem = (id) => {
        let newItems = [...items]
        for (let index = 0; index < newItems.length; index++) {
            if (newItems[index].id === id){
                newItems[index].clicked = !newItems[index].clicked 
                console.log(newItems[index])
            }
        }
        setItems(newItems)
    }

    const [textContent, setTextContent] = useState("Write new item for my list here!")

    const handleClick = () => {
        let id = items.length + 1
        let newItems = [...items]
        let newItem = {
            id: id.toString(),
            text: textContent,
            clicked: false
        }
        newItems.push(newItem)
        setItems(newItems)
    }
    
    return (
        <div>
            <MyList
            updateItem = {updateItem}
            header="My nice list"
            items={items}
            />
            <textarea 
            value={textContent}
            onChange={e => setTextContent(e.target.value)}
            name="newItem"
            rows={4}
            cols={40}
            />
            <button onClick={handleClick}>Add new item to my nice list</button>   
        </div> 
    )
}

export default MyContainer