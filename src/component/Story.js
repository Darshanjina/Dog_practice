import React, { Component } from 'react'

export default class Story extends Component {
    render() {
        const {story} = this.props;
        return (
            <a href={story} download>
                 <div className="storyDiv">
                    <img src={story} className="storyImg" alt={story} />
                </div>
            </a>
        )
    }
}
