/* eslint-disable react/no-danger */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType, HTML } from '../../../lib';

export default class Marker extends React.Component {
  static displayName = 'Marker';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'a',
    className: '',
  };

  createMarkup = () => {
    const { as, ...rest } = this.props;
    const Element = getElementType(Marker, as);
    const htmlString = renderToStaticMarkup(<Element {...rest} />);
    const asString = `<${as} `;
    return { __html: htmlString.replace(asString, `${asString} uk-marker `) };
  };

  render() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}
