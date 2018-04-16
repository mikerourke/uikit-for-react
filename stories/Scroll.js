import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Division, Button, Scroll } from '../src/components';

Scroll.displayName = 'Scroll';

storiesOf('Scroll', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Scroll.Scrollable>
        <Scroll.Point as={Button} primary goTo="next">
          Scroll Down
        </Scroll.Point>
        <Division style={{ height: 2000 }} />
        <Scroll.Point as={Button} primary goTo="#top">
          Scroll Up
        </Scroll.Point>
      </Scroll.Scrollable>
    </Division>
  ))

  .add('Callback after scroll', () => (
    <Division margin={{ all: 'large' }}>
      <Scroll.Scrollable>
        <Scroll.Point
          as={Button}
          primary
          goTo="next"
          onScrolled={action('onScrolled')}
        >
          Down with callback
        </Scroll.Point>
        <Division style={{ height: 2000 }} />
        <Scroll.Point as={Button} primary goTo="#top">
          Scroll Up
        </Scroll.Point>
      </Scroll.Scrollable>
    </Division>
  ));
