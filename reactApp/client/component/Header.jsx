import React, {Component} from 'react'


export default class Header extends Component {
    render(){
        return (
            <div>
                <header>
                    <img src="client/images/img_logo.jpg" className="img-logo" />
                    <img src="client/images/banner_1.jpg" className="img-banner" />
                </header>
            </div>
        );
    }
}

