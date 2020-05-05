
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Container, Row, ListGroup } from "react-bootstrap";
import { searchPlanets } from '../action/PlanetActions';

//Search container
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    componentDidMount() {
        this.props.searchPlanets('');
    }

    hendleChange = (e) => {
        this.setState({ searchText: e.target.value });
        if (e.target.value !== this.state.searchText) {
            this.props.searchPlanets(e.target.value);
        }
    }

    //Render search list
    renderList = () => {
        if (this.props.loading) {
            return (<Spinner animation="border" variant="primary" />);
        }
        return this.props.planetSearch.map((item, index) => {
            console.log(this.props.planetSearch);
            return (
                <li className="list-group-item" key={index} style={{ fontSize: (13 + 3 * index) }}>
                    {item.name} {item.population} {item.terrain}
                </li>
            );
        });
    }

    render() {
        return (
            <Container className="search-container">
                <Row>
                    <h5 className="card-title">Search Planets</h5>
                </Row>
                <Row>
                    <input type="text" id="id-search"
                        placeholder="Search"
                        value={this.state.searchText}
                        onChange={this.hendleChange} />
                </Row >

                <Row>
                    <ListGroup className="list-container">
                        {this.renderList()}
                    </ListGroup>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    planetSearch: state.planets.data,
    loading: state.planets.loading,
    loginUser: state.login.loginUser,
});
export default connect(mapStateToProps, { searchPlanets })(SearchComponent);