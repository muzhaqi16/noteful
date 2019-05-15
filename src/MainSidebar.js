import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class MainSidebar extends Component {
    render() {
        let folders = this.props.folders.map((folder)=>{
            return <Link to={'folder/' + folder.id}><li key={folder.id}>{folder.name}</li></Link>
        });
        return (
            <aside>
                <ul>
                   {folders}
                    <li>Add Folder</li>
                </ul>
            </aside>
        )
    }
}