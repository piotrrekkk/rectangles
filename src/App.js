import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './components/Header/Header';
import RectanglesContainer from './components/RectanglesContainer/RectanglesContainer';
import AddModal from './components/AddModal/AddModal';


import * as RectangleActions from './actions/actions';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddModalVisible: false
        }
    }

    addRectangleModal() {
        this.showModal()
    }

    showModal() {
        this.setState({
            isAddModalVisible: true
        })
    }

    closeModal() {
        this.setState({
            isAddModalVisible: false
        })
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.isAddModalVisible ?
                    <AddModal
                        onSubmitAction={this.props.actions.addRectangle.bind(this)}
                        closeModal={this.closeModal.bind(this)}/>
                    : null
                }

                <Header
                    addRectangleModal={this.addRectangleModal.bind(this)}
                    removeAllRectangles={this.props.actions.removeAllRectangles.bind(this)}/>
                <RectanglesContainer rectangles={this.props.rectangles}/>
            </div>
        );
    }
}

App.propTypes = {
    rectangles: PropTypes.array.isRequired,
    actions   : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    rectangles: state.rectangles
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(RectangleActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
