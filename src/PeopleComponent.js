import React from 'react';

function PeopleComponent(props) {

    const [count, setCount] = React.useState(0);

    const [age,setAge] = React.useState('Child');

    function checkChild() {
        console.log('Currently the age is ' + count);
        if(count>18){
            setAge("Adult");
        }
    }

    React.useEffect(checkChild,[count]);

    function increaseCount() 
    {
        setCount(count+1);
        props.setTotal(
            function(total) {
                return total + 1
            }
        );
    }

    return (
        <div>
        <div>{props.object.name} is a/an {age}</div>
        <h4>Button Pressed: {count} times</h4>
        <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default PeopleComponent;