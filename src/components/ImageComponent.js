import React, { Component } from 'react';

class ImageComponent extends Component {
  render() {
    return (
      <div className="image-component">
        <img src="path_to_static_image" alt="Static" />
      </div>
    );
  }
}

export default ImageComponent;
