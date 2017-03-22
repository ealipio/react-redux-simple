import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {urlAPI} from "../api/data";
import {itemsFetchData} from "../actions/itemsActions";

class ItemList extends Component{
  
    componentDidMount(){
        this.props.fetchData(urlAPI);
    }

    render(){
        if(this.props.hasErrored){
            return (<h1>Error happens</h1>);
        }

        if(this.props.isLoading){
            return(<h1>Loading</h1>);
        }

        return(
            <ul>
                {this.props.items.map(
                    (item, index) => (<li key={index}>{item.label}</li>)
                )}
            </ul>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
import React, {Component} from "react";
import {urlAPI} from "../api/data";

class ItemList extends Component{
    constructor(){
        super();
        this.state = {items:[]};
    }

    fetchData(url){
        console.log("5. In fetchData");
        this.setState({isLoading: true});

        fetch(url)
        .then(
            (response) => {
                if( !response.ok ) throw Error(response.statusText);
                this.setState({isLoading: false});
                return response;
            }
        )
        .then((response) => response.json())
        .then((items) => this.setState({items}))
        .catch(()=> this.setState({hasErrored: true}));
    }        

    componentDidMount(){
        //setTimeout(function(){this.fetchData(urlAPI)}.bind(this), 3000);
        this.fetchData(urlAPI);
    }

    render(){
        if(this.state.hasErrored){
            return (<h1>Error happens</h1>);
        }

        if(this.state.isLoading){
            return(<h1>Loading</h1>);
        }

        return(
            <ul>
                {this.state.items.map(
                    (item, index) => (<li key={index}>{item.label}</li>)
                )}
            </ul>
        );
    }
}

export default ItemList;*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*import React, {Component} from "react";
import {data} from "../api/data";

class ItemList extends Component{
    constructor(){
        super();
        this.state = data;
    }

    render(){
        if(this.state.hasErrored){
            return (<h1>Error</h1>);
        }

        if(this.state.isLoading){
            return(<h1>Loading</h1>);
        }

        return(
            <ul>
                {this.state.items.map(
                    (item) => (<li key={item.id}>{item.label}</li>)
                )}
            </ul>
        );
    }
}

export default ItemList;*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++