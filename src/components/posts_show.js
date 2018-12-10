import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'


class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost();
    }
    render() {
        return (
        <div>
            Posts Show
        </div>
        );
    };
};

function mapStateToProps({ posts }) {
    
}

export default connect(null, { fetchPost }) (PostsShow)