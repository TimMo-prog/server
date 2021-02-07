import React from 'react';
import Menu from './menu';
import TrailItem from '../nav/trail/trailItem';

class ViewApplicationPage extends React.Component {

    constructor(props) {
        super(props);
    }

    getTrail() {
        return [
            <TrailItem key="1" to="/" displayText="LogUI" />,
            <TrailItem key="2" to="/applications" displayText="Applications" />,
            <TrailItem key="3" to={`/applications/${this.props.match.params.id}`} displayText={this.props.match.params.id} />,
        ];
    }

    componentDidMount() {
        this.props.clientMethods.setMenuComponent(Menu);
        this.props.clientMethods.setTrailComponent(this.getTrail());
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.clientMethods.setTrailComponent(this.getTrail());
        }
    }

    render() {
        return(
            <main>
                <h1>Application with {this.props.match.params.id}</h1>
            </main>
        );
    }

}

export default ViewApplicationPage;