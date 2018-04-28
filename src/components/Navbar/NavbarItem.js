import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';

export default class NavbarItem extends React.Component {
  static displayName = 'NavbarItem';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const searches = this.ref.querySelectorAll('.uk-search');
    if (searches.length !== 0) {
      searches.forEach(searchElement => {
        searchElement.classList.add('uk-search-navbar');
        searchElement.classList.remove('uk-search-default');
      });
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-navbar-item');

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} className={classes} component={NavbarItem} />
      </Ref>
    );
  }
}
