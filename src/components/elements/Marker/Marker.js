/* eslint-disable react/no-danger */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypes from 'prop-types';
import { InlineElement } from '../../base';

export default class Marker extends React.Component {
  static displayName = 'Marker';

  static propTypes = {
    ...InlineElement.propTypes,
    as: InlineElement.asPropType,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'a',
    className: '',
  };

  createMarkup = () => {
    const htmlString = renderToStaticMarkup(<InlineElement {...this.props} />);
    const asString = `<${this.props.as} `;
    return { __html: htmlString.replace(asString, `${asString} uk-marker `) };
  };

  render() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}
