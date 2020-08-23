import React, { Component } from 'react'

export default class PopUp extends Component {
    render() {
        const {breed , imgUrl} = this.props;
        const dogID = "#"+breed;

        return (
            <React.Fragment>
                <button data-toggle="modal" data-target={dogID} className="tooltip-test btn btn-sm" title="Enlarge Image">
                <i className="fa fa-plus-square plusBtn"></i>
                </button>

                <div className="modal fade" id={breed} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {breed.toUpperCase()}
                            </h5>
                        </div>
                        <div className="modal-body p-0">
                            <img src={imgUrl} className="w-100" alt={breed}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light plusBtn" data-dismiss="modal">
                                Close
                            </button>
                            <a href={imgUrl} className="btn btn-light tooltip-test downBtn" title="Download Image" download>
                            <i className="fa fa-download"></i> Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
