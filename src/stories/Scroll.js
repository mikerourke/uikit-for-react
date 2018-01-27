import React from 'react';
import { storiesOf } from '@storybook/react';
import { BlockElement } from '../components/base';
import Button from '../components/elements/Button';
import Scroll from '../components/style/Scroll';
import Container from '../components/layout/Container';

Scroll.displayName = 'Scroll';

storiesOf('Scroll', module).add('Basic Usage', () => (
  <Container margin={{ all: 'large' }}>
    <Scroll.Scrollable>
      <Scroll.Point
        as={Button}
        icon="chevron-down"
        goTo="next"
        onScrolled={() => console.log('Hooray')}
      >
        Button 1
      </Scroll.Point>
      <BlockElement
        style={{ height: 400 }}
        margin={{ all: 'large' }}
        boxShadow="large"
      >
        Test 1
      </BlockElement>
      <Scroll.Point as={Button}>Button 2</Scroll.Point>
      <BlockElement
        style={{ height: 400 }}
        margin={{ all: 'large' }}
        boxShadow="large"
      >
        Test 2
      </BlockElement>
      <Scroll.Point as={Button}>Button 3</Scroll.Point>
      <BlockElement
        style={{ height: 400 }}
        margin={{ all: 'large' }}
        boxShadow="large"
      >
        Test 3
      </BlockElement>
    </Scroll.Scrollable>
  </Container>
));
