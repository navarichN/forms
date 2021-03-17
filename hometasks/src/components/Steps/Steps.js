import {useState} from 'react';

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
                <label for="date">
                    Дата(ДД.ММ.ГГ)
                    <input type="text" name="date" id="date" onChange={(e) => setDate(e.target.value)}></input>
                </label>
                
                <label for="distance">
                    Пройдено км
                    <input type="text" name="distance" id="distance" onChange={(e) => setDist(e.target.value)}></input>
                </label>
                
                <label for="adding">
                    <input type="submit" name="adding" id="adding" value="Ok" onClick={onSubmit}></input>
                </label>
            </form>
            <div>

            </div>
        </div>
    )
}