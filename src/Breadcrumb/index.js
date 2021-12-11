import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default class Breadcrumb extends Component {

   
    _linkHome = {
        'link': '/',
        'title': 'Home'
    }

    _renderItemHome = () => {
        return(
            <li className="breadcrumb-item">
                <i className="fa fa-home"></i>
                <NavLink
                    exact={true}
                    activeClassName="active"
                    to={this._linkHome.link}>{this._linkHome.title}</NavLink>
            </li>
        );
    }

   

    _renderChildItem = () => {
        if(this.props.subitem) {
            return(
                <li className="breadcrumb-item active">{this.props.subitem}</li>
            );
        }else {
            return '';
        }
    }

    _renderLayout = () => {
        return(
            <ol className="breadcrumb">
                {this._renderItemHome()}
                {this._renderChildItem()}
            </ol>
        );
    }

    render() {
        return (
            <nav aria-label="breadcrumb">
                    {this._renderLayout()}
            </nav>
        );
    }
}
