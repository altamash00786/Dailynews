import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                    <span className="spinner-border text-info my-3" role="status" aria-hidden="true"></span>
                    Loading...
                   
            </div>
        )
    }
}
