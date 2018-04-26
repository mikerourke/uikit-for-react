import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import { ScrollspyNav } from '../Scrollspy';
import BreadcrumbItem from './BreadcrumbItem';

export default class Breadcrumb extends React.Component {
  static displayName = 'Breadcrumb';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('ul'),
    children: customPropTypes.restrictToChildTypes(BreadcrumbItem),
    scrollspy: PropTypes.shape(ScrollspyNav.propTypes),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'ul',
  };

  static Item = BreadcrumbItem;

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const { scrollspy } = this.props;
    if (scrollspy) {
      ScrollspyNav.initialize(this.ref, scrollspy);
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const { className, scrollspy, ...rest } = this.props;

    const classes = classnames(className, 'uk-breadcrumb');

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} className={classes} component={Breadcrumb} />
      </Ref>
    );
  }
}
