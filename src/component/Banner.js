import React, { Component } from 'react'
import axios from 'axios';
import Story from './Story';

export default class Banner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             story:[]
        }
    }

    getStories = () => {
        axios.get("https://dog.ceo/api/breeds/image/random/10")
        .then((res)=>{
            this.setState({story: res.data.message});
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    
    componentDidMount(){
        this.getStories();
    }

    render() {
        return (
            <div className="text-center storyContainer">
                {this.state.story.map((story, i)=>(
                    <Story story={story} key={i}/>
                ))}
            </div>
        );
    }
}
