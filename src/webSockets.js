import { useState, useEffect } from 'react';

export default function useWebSocket(path){
    const [data, setData] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://' + window.location.host + "/ws/" + path);

        socket.onmessage = (message) => {
            console.log("Message recieved");
            const dataArray = JSON.parse(message.data);
            const newData = [];
            dataArray.forEach((d) => {
                newData.push(d);
            });
            
            setData(newData);
        }
    }, []);

    return data;
}