import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Widget = props => (
    <tr>
        <td>{props.widget.username}</td>
        <td>{props.widget.description}</td>
        <td>{props.widget.duration}</td>
        <td>{props.widget.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.widget._id}>edit</Link> | <a href="#" onClick={() => { props.deleteWidget(props.widget._id) }}>delete</a>
        </td>
    </tr>
)

export default class WidgetList extends Component {
    constructor(props) {
        super(props);

        this.deleteWidget = this.deleteWidget.bind(this)

        this.state = {widgets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/widgets')
            .then(response => {
                this.setState({ widgets: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteWidget(id) {
        axios.delete('http://localhost:4000/widgets/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            widgets: this.state.widgets.filter(el => el._id !== id)
        })
    }

    widgetList() {
        return this.state.widgets.map(currentwidget => {
            return <Widget widget={currentwidget} deleteWidget={this.deleteWidget} key={currentwidget._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3><u>Les différentes tâches à réaliser</u></h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Participants</th>
                        <th>Description</th>
                        <th>Durée(en jours)</th>
                        <th>Date (début de la tâche)</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.widgetList() }
                    </tbody>
                </table>
            </div>
        )
    }
}