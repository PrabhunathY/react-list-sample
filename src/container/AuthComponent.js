//core
import * as React from 'react';
import { connect } from 'react-redux';
import { Spinner } from "react-bootstrap";


import { Toster } from '../component/alert';
import { getPeople, setLoginUser } from '../action/LoginActions';
import Login from '../component/login';
import "./styles.css";
import { PEOPLE_API_ERROR } from '../Constants';

//Login contaniner
class AuthComponent extends React.Component {

    componentDidMount() {
        console.log('componentWillMount');
        this.props.getPeople();
    }

    componentDidUpdate(preProps) {

    }

    handleLogin = (params) => {
        console.log('onLoginPress', params);
        const { userName, password } = params;
        const person = this.props.people.filter(items => items.name === userName && items.birth_year === password);
        if (person && person.length) {
            this.props.setLoginUser(person[0]);
            Toster.success('Login Sucessfully!');
            this.props.history.push("/search");
        } else {
            Toster.error(PEOPLE_API_ERROR);
        }
    }

    renderLoader = () => {
        if (this.props.loading) {
            return (<div className="loader-contaner"><Spinner animation="border" variant="primary" /></div>);
        }
        return null;
    }

    render() {
        return (
            <div class="card login">
                <div class="card-body">
                    <h5 class="card-title">Login</h5>
                    {this.renderLoader()}
                    {!this.props.loading && <Login onLogin={this.handleLogin} />}
                </div>
            </div>
        );
    }
}



const mapStateToProps = ({ login }) => {
    const { people, message, loading } = login;
    return { people, message, loading };
};

export default connect(mapStateToProps, { getPeople, setLoginUser })(AuthComponent);





