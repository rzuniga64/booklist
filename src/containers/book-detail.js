import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 *  We need to hook up BookDetail to the Redux store so it gets told about changes to the active piece of state.
 *  We will import the connect helper and connect our application state to the props of this container. We do that by
 *  defining a function called mapStateToProps and then we connect MapStateToProps with BookDetail.
 *  We are specifically referencing active book because our active book reducer is creating the active book piece of
 *  state.  Finally, export our container. We can now make use of this.props.book inside of the container because
 *  we mapped our application state to the props of this particular component.
 *
 *  Our Reducers get called when the application first boots up some action comes through but we don’t know what the
 *  type is so it just returns the current state which is ‘null’.  So when we first boot up our state is ‘null’ because
 *  no events have been triggered.  Our component is going to try to render but this.props.book is ‘null’ which throws
 *  an error in JavaScript. So add an initial check in the render method which checks if this.props.book exists and if
 *  not return early.
 *
 *  Once a book is selected the event will cause the container to re-render because we’ve hooked it up to Redux.
 */
class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// The object that we return from here is going to show as props inside of our BookDetail.
function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
