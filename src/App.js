import React from 'react';
import PeopleComponent from './PeopleComponent';

let people = [
    {
        name: 'Snehil',
        email: 'snehilsaluja@gmail.com',
        isMuted: false,
        color: 'lightblue'
    },
    {
        name: 'Chinmay',
        email: 'chinmayj20@iitk.ac.in',
        isMuted: true,
        color: 'lightgreen'
    },
    {
        name: 'Vikas',
        email: 'vikashv20@iitk.ac.in',
        isMuted: true,
        color: 'goldenyellow'
    },
    {
        name: 'Ayush',
        email: 'aayush20@iitk.ac.in',
        isMuted: true,
        color: 'blue'
    }
];

export default function App() {

    const [total, setTotal] = React.useState(0);
    const [age, setAge] = React.useState("Child");

    function checkChild() {
        console.log('Currently the age is ' + total);
        if(total>18){
            setAge("Adult");
        }
    }

    React.useEffect(checkChild, [total]);

    return(
        <div id="allNames">
            <h1>Total: {total}</h1>
            <h3>{age}</h3>
            {
                people.map(function(obj) {
                    return (
                        <PeopleComponent object={obj} setTotal={setTotal} />
                    )
                }
                )
            }
        </div>
    )
}