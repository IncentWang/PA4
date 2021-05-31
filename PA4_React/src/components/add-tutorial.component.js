import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeColors = this.onChangeColors.bind(this);
    this.onChangeImagePath = this.onChangeImagePath.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      productName: "",
      description: "",
      productColors: "",
      productPrice: 0, 
      productBrand: "",
      productImagePath: "",
      published: false,

      submitted: false
    };
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      productName: e.target.value
    });
  }

  onChangeColors(e) {
    this.setState({
      productColors: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      productPrice: e.target.value
    });
  }

  onChangeBrand(e) {
    this.setState({
      productBrand: e.target.value
    });
  }

  onChangeImagePath(e) {
    this.setState({
      productImagePath: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      productName: this.state.productName,
      description: this.state.description,
      productColors: this.state.productColors,
      productPrice: this.state.productPrice,
      productBrand: this.state.productBrand,
      productImagePath: this.state.productImagePath,
      published: this.state.published
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          productName: response.data.productName,
          description: response.data.description,
          productColors: response.data.productColors,
          productPrice: response.data.productPrice,
          productBrand: response.data.productBrand,
          productImagePath: response.data.productImagePath,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price"> Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.productPrice}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="colors"> Colors</label>
              <input
                type="text"
                className="form-control"
                id="colors"
                required
                value={this.state.productColors}
                onChange={this.onChangeColors}
                name="colors"
              />
            </div>

            <div className="form-group">
              <label htmlFor="brand"> Brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                required
                value={this.state.productBrand}
                onChange={this.onChangeBrand}
                name="brand"
              />
            </div>

            <div className="form-group">
              <label htmlFor="imagepath"> ImagePath</label>
              <input
                type="text"
                className="form-control"
                id="imagepath"
                required
                value={this.state.productImagePath}
                onChange={this.onChangeImagePath}
                name="imagepath"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
