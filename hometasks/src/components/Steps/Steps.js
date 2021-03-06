import {useState} from 'react';
import {PencilIcon, XCircleIcon} from '@primer/octicons-react';

export default function Steps(){
    const [data, setData] = useState({});
    const [date, setDate] = useState('');
    const [dist, setDist] = useState(0);

    const formatMonth = (value) => {
            let m = value.getMonth()+1;
            if(Number(m) <= 9) {
                return `0${m}`
            } else {
                return m;
            }
    }

    const formatDay = (value) => {
        let d = value.getDate();
        if(Number(d) <= 9) {
            return `0${d}`
        } else {
            return d;
        }
    }

    const formatDate = (d) => {
        let date = new Date(d);
        let day = formatDay(date);
        let month = formatMonth(date);
        let year = date.getFullYear();
        let dateStr = `${day}.${month}.${year}`;
        let arrDateData = [dateStr, year, month, day];
        return arrDateData;
    }

    let dataArr = Object.entries(data).map((el) => {
        let arr = el[0].split(',');
        arr.push(el[1])
        return arr;
    })

    let sortedDataArr = dataArr
    .sort((a,b)=>{
        return b[3]-a[3]; 
    })
    .sort((a,b)=>{
        return b[2]-a[2]; 
    })
    .sort((a,b)=>{
        return b[1]-a[1]; 
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if(data.hasOwnProperty(date)) {
            setData(prev => ({
                ...prev,
                [date]: data[date] + dist
            }))
        } else {
            setData(prev => ({
                ...prev,
                [date] : dist
            }))
        }    
    }

    const editItem = (e) => {

    }

    const removeItem = (e) => {
        e.stopPropagation()
        let btn = e.currentTarget
        let btns = btn.parentNode
        let item = btns.parentNode
        let itemId = item.id
        delete data[itemId]
        setData(prev => ({
            ...prev
        }))
    }

    let table = (
        <table className="output">
        <thead>
            <tr className="output-head">
                <th>Дата(ДД.ММ.ГГ)</th>
                <th>Пройдено км</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody className="output-body">
            {sortedDataArr.map((el, i) => {
                let arr = el[0].split(',');
                let arrId = el.filter((item) => typeof item !== "number")
                let id = arrId.join()
                return (
                    <tr className="output-item" key = {el+i} id = {id}>
                        <td>{arr[0]}</td>
                        <td>{el[4]}</td>
                        <td className="output-item-buttons">
                            <button className="pen" onClick={editItem}><PencilIcon size={20}/></button>
                            <button className="cross" onClick={removeItem}><XCircleIcon size={20}/></button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )

    return(
        <div className="steps">
            <form className="form">
                <label htmlFor="date">
                    Дата(ДД.ММ.ГГ)
                    <input type="date" name="date" id="date" onChange={(e) => setDate(formatDate(e.target.value))}></input>
                </label>
                
                <label htmlFor="distance">
                    Пройдено км
                    <input type="text" name="distance" id="distance" pattern="[0-9]{1,100}" onChange={(e) => {
                        setDist(Number(e.target.value))
                        // let value = e.target.value;
                        // if(isNaN(value)){
                        //     document.getElementById("adding").disabled = true;
                        //     alert('Введите число')
                        // } else {
                        //     setDist(Number(e.target.value))
                        // }
                        }}
                    required>
                    </input>
                </label>
                
                <label className="adding" htmlFor="adding">
                    ''
                    <input type="submit" name="adding" id="adding" value="Ok" onClick={(e)=>{
                        if(isNaN(document.getElementById("distance").value)){
                            alert('Введите число')
                        } else {
                            onSubmit(e)
                        }
                        
                    }}></input>
                </label>
            </form>
            <div>
                {Object.keys(data).length >= 1 ? table : ''}
            </div>
        </div>
    )
}