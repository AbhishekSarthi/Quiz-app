import React, { Component } from 'react';
// import { FaMailBulk } from 'react-icons/fa';

export default class Gmail extends Component {
    render() {
        return (
            <div className="m-2 text-center">
                <div className="contact">
                    Have a question you'd like to see?
                    <br />
                    Let me know!
                    <img
                        src="./gmail_blue.png"
                        alt="gmail"
                        className="img"
                    ></img>
                </div>
            </div>
        );
    }
}
