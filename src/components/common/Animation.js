import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { buildClassName, UIK } from '../../lib';

const propTypes = PropTypes.oneOfType([
  PropTypes.oneOf(UIK.ANIMATIONS),
  PropTypes.shape({
    name: PropTypes.oneOf(UIK.ANIMATIONS),
    reverse: PropTypes.bool,
    fast: PropTypes.bool,
    transformCenter: PropTypes.bool,
    transformOrigin: ExtraPropTypes.and([
      PropTypes.shape({
        horizontal: PropTypes.oneOf(UIK.HORIZONTAL_POSITIONS).isRequired,
        vertical: PropTypes.oneOf(UIK.VERTICAL_POSITIONS).isRequired,
      }),
      props => {
        const { horizontal = null, vertical = null } = get(
          props,
          ['animation', 'transformOrigin'],
          {},
        );
        if ((horizontal && !vertical) || (!horizontal && vertical)) {
          return new Error(
            'You must specify both a horizontal and vertical property for transformOrigin in animation.',
          );
        }
        return null;
      },
    ]),
  }),
]);

const getClasses = animationProp => {
  const horizOrigin = get(animationProp, ['transformOrigin', 'horizontal']);
  const vertOrigin = get(animationProp, ['transformOrigin', 'vertical']);

  return classnames(
    buildClassName('animation', animationProp),
    buildClassName('animation', get(animationProp, 'name')),
    buildClassName('transform', 'origin', vertOrigin, horizOrigin),
    {
      [buildClassName('animation', 'fast')]: get(animationProp, 'fast', false),
      [buildClassName('animation', 'reverse')]: get(
        animationProp,
        'reverse',
        false,
      ),
      [buildClassName('animation', 'transform', 'center')]: get(
        animationProp,
        'transformCenter',
        false,
      ),
    },
  );
};

export default {
  propTypes,
  getClasses,
};
