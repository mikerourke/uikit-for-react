/* eslint-disable react/no-danger */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { customPropTypes, HTML } from '../../../lib';
import Base from '../../base';

export default class Marker extends React.Component {
  static displayName = 'Marker';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement(HTML.INLINE_ELEMENTS),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'a',
  };

  createMarkup = () => {
    const { as, ...rest } = this.props;

    const htmlString = renderToStaticMarkup(
      <Base {...rest} component={Marker} />,
    );

    const asString = `<${as} `;
    return { __html: htmlString.replace(asString, `${asString} uk-marker `) };
  };

  render() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}
