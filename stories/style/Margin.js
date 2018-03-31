import React from 'react';
import faker from 'faker';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import { Block, Button, Container, Card, Margin } from '../../src/components';

const firstParagraph = faker.lorem.paragraph();
const secondParagraph = faker.lorem.paragraph();

const MarginCards = props => (
  <React.Fragment>
    <Card {...props}>{firstParagraph}</Card>
    <Card {...props}>{secondParagraph}</Card>
  </React.Fragment>
);

const fullHeight = { height: '100vh' };

storiesOf('Margin', module)
  .add('Usage', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <MarginCards margin />
    </Container>
  ))

  .add('Small margin', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <MarginCards margin="small" />
    </Container>
  ))

  .add('Medium margin', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <MarginCards margin="medium" />
    </Container>
  ))

  .add('Large margin', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <MarginCards margin="large" />
    </Container>
  ))

  .add('X-Large margin', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <MarginCards margin="xlarge" />
    </Container>
  ))

  .add('Remove margin', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <MarginCards margin="remove" />
    </Container>
  ))

  .add('Auto margin', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <Card
        margin={{ left: 'auto', base: true }}
        width={{ atSm: '1/2' }}
        textAlign="center"
      >
        Block element
      </Card>
      <Block flex height="medium" background="muted" margin textAlign="center">
        <Card
          margin={{ base: 'auto', vertical: 'auto' }}
          width={{ atSm: '1/2' }}
        >
          Flex item
        </Card>
      </Block>
    </Container>
  ))

  .add('Dynamic wrapping', () => (
    <Container margin={{ all: 'large' }} style={fullHeight}>
      <Margin>
        {range(0, 10).map(buttonIdx => (
          <Button key={`btn-${buttonIdx}`}>Button</Button>
        ))}
      </Margin>
    </Container>
  ));
