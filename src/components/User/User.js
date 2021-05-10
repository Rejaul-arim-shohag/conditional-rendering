import React from 'react';

const user = (props) => {
    const familiar = props.familiar;
    let greatting;
    if (familiar) {
        greatting = <p>Welcome My Friend</p>
    } else {
        greatting = <p>Who The hell are you</p>
    };

    const connection = (familiar)? <p>Added by Facebook</p> : <p>I don't know him</p>
    
    return (
        <div>
            <div>
                <h2>Greatting</h2>
                {greatting}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar? <p>I Will buy food for you</p> : <p>Lets eats his his whoes whose</p>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {connection}
            </div>
            <div>
                <h2>welcome</h2>
                {
                    familiar && <p>You are allready signup</p>
                }
            </div>
        </div>
    );
};

export default user;