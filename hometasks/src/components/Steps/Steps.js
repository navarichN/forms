import {useState} from 'react';
import {PencilIcon, XCircleIcon} from '@primer/octicons-react';

export default function Steps(){
    const [data, setData] = useState({});
    const [date, setDate] = useState('');
    const [dist, setDist] = useState('');

    const onSubmit = (e) => {
        // setData(data[date] = dist)
        if(data.hasOwnProperty(date)) {
            console.log('date=',date, 'data[date]=', data[date])
            console.log('data:',data)
            data[date] = data[date]  + dist        
        }
        setData(prev => ({
            ...prev,
            [date] : dist
        }))
            
        console.log(data)
        e.preventDefault();
    }
    

    return(
        <div className="steps">
            <form className="form">
                <label htmlFor="date">
                    Дата(ДД.ММ.ГГ)
                    <input type="text" name="date" id="date" onChange={(e) => setDate(e.target.value)}></input>
                </label>
                
                <label htmlFor="distance">
                    Пройдено км
                    <input type="text" name="distance" id="distance" onChange={(e) => setDist(e.target.value)}></input>
                </label>
                
                <label htmlFor="adding">
                    <input type="submit" name="adding" id="adding" value="Ok" onClick={onSubmit}></input>
                </label>
            </form>
            <div className="output">
                <div className="output-head">
                    <span>Дата(ДД.ММ.ГГ)</span>
                    <span>Пройдено км</span>
                    <span>Действия</span>
                </div>
                {Object.entries(data).map((el) => {
                    return (
                        <div className="output-data">
                            <h1>{el[0]}</h1>
                            <h2>{el[1]}</h2>
                            <button className="pen"><PencilIcon size={15}/></button>
                            <button className="cross"><XCircleIcon size={16} /></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}