import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
export default class Mainmenu extends Component {

   
    render() {
        
        return (
          
            <nav className="main-wrap">
                <ul className="main-navigation nav ">
                    <li className="ss_menu_lv1 menu_item active">
                        <NavLink to="/" title="Home">
                            <span className="ss_megamenu_title">Home</span>
                        </NavLink>
                    </li>
                    <li className="ss_menu_lv1 menu_item">
                        <NavLink to="/collections/men" title="Men">
                            <span className="ss_megamenu_title">Men</span>
                        </NavLink>
                    </li>
                    <li className="ss_menu_lv1 menu_item">
                      
                        <NavLink to="/collections/women" title="Women">
                            <span className="ss_megamenu_title">Women</span>
                        </NavLink>
                    </li>
                    <li className="ss_menu_lv1 menu_item">
                       
                        <NavLink to="/collections/bed-bath" title="Kids">
                            <span className="ss_megamenu_title">Kids</span>
                        </NavLink>
                    </li>
                    <li className="ss_menu_lv1 menu_item">
                      
                        <NavLink to="/collections/frontpage" title="Home ware">
                            <span className="ss_megamenu_title">Home ware</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

        );
    }
}

