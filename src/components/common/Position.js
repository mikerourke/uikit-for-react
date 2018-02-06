import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { buildClassName, UIK } from '../../lib';

const propTypes = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.LOCATIONS),
  PropTypes.oneOf(UIK.CSS_POSITIONS),
  PropTypes.shape({
    horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS),
    vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS),
    cover: PropTypes.bool,
    marginSize: PropTypes.oneOf(UIK.BASE_SIZES),
    outside: PropTypes.oneOf(['left', 'right']),
    type: PropTypes.oneOf(UIK.CSS_POSITIONS),
    zIndexOfOne: PropTypes.bool,
  }),
]);

const getClasses = positionProp => {
  const horizProp = get(positionProp, 'horizontal');
  const vertProp = get(positionProp, 'vertical');
  const isCentered = horizProp === 'center' && vertProp === 'center';

  return classnames(
    buildClassName('position', positionProp),
    buildClassName('position', 'center', get(positionProp, 'outside'), 'out'),
    buildClassName('position', get(positionProp, 'marginSize')),
    buildClassName('position', get(positionProp, 'type')),
    {
      [buildClassName('position', vertProp, horizProp)]: !isCentered,
      'uk-position-center': isCentered,
      'uk-position-cover': get(positionProp, 'cover', false),
      'uk-position-z-index': get(positionProp, 'zIndexOfOne', false),
    },
  );
};

export default {
  propTypes,
  getClasses,
};
