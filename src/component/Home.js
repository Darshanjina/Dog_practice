import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getBreeds} from '../action/dogAction';
import DogCard from './DogCard';
import Banner from './Banner';

class Home extends Component {

    componentDidMount(){
        this.props.getBreeds();
    }

    funFindSimilar = (breed) => {
        console.log(breed);
        this.props.history.push(`/similar/${breed}`);
    };

    render() {
        return (
            <React.Fragment>
                <Banner/>
                <div className="mt-3 py-3 h5 text-center text-secondary">
                <i className="fa fa-paw txtPink"></i> Top Posts
                </div>
                <div className="py-2 cardHolder">
                    {
                        this.props.breeds.map((breed,i)=>(
                            <DogCard key={i} breed={breed} funFindSimilar={this.funFindSimilar} />
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    breeds:state.dog.breeds
})

export default connect(mapStateToProps,{getBreeds})(Home);