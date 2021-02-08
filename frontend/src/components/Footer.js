import React, { Component } from 'react'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Footer extends Component {
    render() {
        // const iconcr = <FontAwesomeIcon icon={copyright}/>
        return (
            <div>
            <div className="footer">
            <FontAwesomeIcon icon={faCopyright}/>RicSny productions
          </div>
            </div>
        )
    }
}
