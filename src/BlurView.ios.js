import React, { Component, PropTypes } from 'react';
import { requireNativeComponent } from 'react-native';

class BlurView extends Component {
  render() {
    return (
      <NativeBlurView
        {...this.props}
        style={[{
          backgroundColor: 'transparent',
        }, this.props.style
        ]}
      />
    );
  }
}

BlurView.propTypes = {
  blurType: PropTypes.string,
};

const NativeBlurView = requireNativeComponent('BlurView', BlurView);

module.exports = BlurView;
