import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Button, Scroll } from '../src/components';

Scroll.displayName = 'Scroll';

storiesOf('Scroll', module).add('Usage', () => (
  <Block margin={{ all: 'large' }}>
    <Scroll.Scrollable>
      <Scroll.Point
        as={Button}
        icon="chevron-down"
        goTo="next"
        onScrolled={() => console.log('Hooray')}
      >
        Button 1
      </Scroll.Point>
      <Block style={{ height: 400 }} margin={{ all: 'large' }} boxShadow="large">
        Test 1
      </Block>
      <Scroll.Point as={Button}>Button 2</Scroll.Point>
      <Block style={{ height: 400 }} margin={{ all: 'large' }} boxShadow="large">
        Test 2
      </Block>
      <Scroll.Point as={Button}>Button 3</Scroll.Point>
      <Block style={{ height: 400 }} margin={{ all: 'large' }} boxShadow="large">
        Test 3
      </Block>
    </Scroll.Scrollable>
  </Block>
));
