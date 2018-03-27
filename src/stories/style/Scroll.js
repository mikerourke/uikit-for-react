import React from 'react';
import { storiesOf } from '@storybook/react';
import { Base, Button, Scroll } from '../../components';

Scroll.displayName = 'Scroll';

storiesOf('Scroll', module).add('Usage', () => (
  <Base margin={{ all: 'large' }}>
    <Scroll.Scrollable>
      <Scroll.Point
        as={Button}
        icon="chevron-down"
        goTo="next"
        onScrolled={() => console.log('Hooray')}
      >
        Button 1
      </Scroll.Point>
      <Base style={{ height: 400 }} margin={{ all: 'large' }} boxShadow="large">
        Test 1
      </Base>
      <Scroll.Point as={Button}>Button 2</Scroll.Point>
      <Base style={{ height: 400 }} margin={{ all: 'large' }} boxShadow="large">
        Test 2
      </Base>
      <Scroll.Point as={Button}>Button 3</Scroll.Point>
      <Base style={{ height: 400 }} margin={{ all: 'large' }} boxShadow="large">
        Test 3
      </Base>
    </Scroll.Scrollable>
  </Base>
));
