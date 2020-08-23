import React, { Component } from "react";
import axios from "axios";

export default class Similar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: [],
    };
  }

  componentDidMount() {
    this.funGetSimilar();
  }

  funGetSimilar = () => {
    const breed = this.props.match.params.breed;
    axios
      .get("https://dog.ceo/api/breed/" + breed + "/images/random/9")
      .then((res) => {
        this.setState({ imgList: res.data.message });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const breed = this.props.match.params.breed;
    return (
      <div className="container">
        <div className="py-4">
          <img
            src={this.state.imgList[0]}
            alt="profile"
            className="profileImg"
          />
          <span className="profileName text-dark">
            {breed.toUpperCase()} <i className="fa fa-paw text-primary"></i>
          </span>
        </div>

        <div className="row py-3 mx-0">
          {this.state.imgList.map((img, i) => (
            <div key={i} className="text-center p-1 col-4">
              <a
                href={img}
                className="tooltip-test"
                title="Download Image"
                download
              >
                <img src={img} alt={img} className="similarImg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
