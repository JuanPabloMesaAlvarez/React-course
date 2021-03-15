import { React, Component } from "react";
import UserInput from "./User/Input/UserInput";
import UserOutput from "./User/Output/UserOutput";

class AppAssignment1 extends Component {

    state = {
        vikings: [
            { name: 'Ragnar' },
            { name: 'Bjorn' },
            { name: 'Lagertha' }
        ]
    };

    vikingNameChangedHandler = (event) => {
        this.setState({
            vikings: [
                { name: event.target.value },
                { name: 'Bjorn' },
                { name: 'Lagertha' }
            ]
        });
    }

    render() {
        return (
            <div>
                <UserInput nameChanged={this.vikingNameChangedHandler} value={this.state.vikings[0].name} />
                <UserOutput userName={this.state.vikings[0].name} value="viking" />
                <UserOutput userName={this.state.vikings[1].name} value="viking" />
                <UserOutput userName={this.state.vikings[2].name} value="viking" />
            </div>
        );
    }
}

export default AppAssignment1;