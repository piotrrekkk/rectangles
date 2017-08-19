import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './components/Header/Header';
import RectanglesContainer from './components/RectanglesContainer/RectanglesContainer';
import AddModal from './components/AddModal/AddModal';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddModalVisible: false
        }
    }

    addRectangle() {
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
                        closeModal={this.closeModal.bind(this)}/>
                    : null
                }

                <Header addRectangle={this.addRectangle.bind(this)}/>
                <RectanglesContainer/>
            </div>
        );
    }
}

export default App;
