import {useEffect, useState} from 'react';
import './ListComponent.css';
import axios from 'axios';
interface ListItem {
    id: number;
    userId: number;
    body: string;
    title: string;
  }
const ListComponent = () => {
    const [listData, setListData] = useState<ListItem[]>([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
            setListData(data.data);
        }).catch((error)=>{
            console.log('error',error)
        })
    },[]);
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <div className='container-tiles'>
            {listData.map((data)=>{
                const {id, title} = data;
                // eslint-disable-next-line react/react-in-jsx-scope
                return <div key={id} className='tile-post'>{title}</div>
            })}
            {/* <div className="tile-post">Tile one</div>
            <div className="tile-post">Tile two</div>
            <div className="tile-post">Tile three</div>
            <div className="tile-post">Tile four</div>
            <div className="tile-post">Tile five</div> */}
        </div>
    )
}

export {ListComponent}