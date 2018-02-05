import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Base,
  Button,
  Card,
  Block,
  Grid,
  Label,
  Link,
  Text,
} from '../../components';

Card.displayName = 'Card';

const avatarLink = 'https://getuikit.com/docs/images/avatar.jpg';
const mediaLink = 'https://getuikit.com/docs/images/light.jpg';
const cardContent = faker.lorem.paragraph();

storiesOf('Card', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Card width={{ atMd: '1/2' }}>
        <Card.Title>Default</Card.Title>
        <Card.Content>
          Lorem ipsum <Link>dolor</Link> sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Content>
      </Card>
    </Block>
  ))

  .add('Style modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/3' }} gutter="small" matchHeight>
        <Grid.Cell>
          <Card>
            <Card.Title>Default</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card primary>
            <Card.Title>Primary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card secondary>
            <Card.Title>Secondary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
      </Grid>
    </Block>
  ))

  .add('Hover modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }} matchHeight>
        <Grid.Cell>
          <Card hover simple>
            <Card.Title>Hover</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card hover>
            <Card.Title>Default</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card primary hover inverse="light">
            <Card.Title>Primary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card secondary hover inverse="dark">
            <Card.Title>Secondary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
      </Grid>
    </Block>
  ))

  .add('Size modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }} matchHeight>
        <Grid.Cell>
          <Card size="small">
            <Card.Title>Small</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card size="large">
            <Card.Title>Large</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
      </Grid>
    </Block>
  ))

  .add('Header & footer', () => (
    <Block margin={{ all: 'large' }}>
      <Card width={{ atMd: '1/2' }}>
        <Card.Header>
          <Grid gutter="small" alignItems="middle">
            <Grid.Cell width="auto">
              <Base
                as="img"
                border="circle"
                src={avatarLink}
                width={40}
                height={40}
              />
            </Grid.Cell>
            <Grid.Cell width="expand">
              <Card.Title margin={{ bottom: 'remove' }}>Title</Card.Title>
              <Text meta as="p" margin={{ top: 'remove' }}>
                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
              </Text>
            </Grid.Cell>
          </Grid>
        </Card.Header>
        <Card.Body>
          <p>{cardContent}</p>
        </Card.Body>
        <Card.Footer>
          <Button as="a" text>
            Read more
          </Button>
        </Card.Footer>
      </Card>
    </Block>
  ))

  .add('Media', () => (
    <Block margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/2' }}>
        <Grid.Cell width="auto">
          <Card>
            <Card.Media alignTo="top" imgSrc={mediaLink} />
            <Card.Body>
              <Card.Title>Media Top</Card.Title>
              <p>{cardContent}</p>
            </Card.Body>
          </Card>
        </Grid.Cell>
        <Grid.Cell width="auto">
          <Card>
            <Card.Body>
              <Card.Title>Media Bottom</Card.Title>
              <p>{cardContent}</p>
            </Card.Body>
            <Card.Media alignTo="bottom" imgSrc={mediaLink} />
          </Card>
        </Grid.Cell>
      </Grid>
    </Block>
  ))

  .add('Horizontal alignment', () => (
    <Block margin={{ all: 'large' }}>
      <Card as={Grid} childWidth={{ atSm: '1/2' }} gutter="collapse" margin>
        <Card.Media
          alignTo="left"
          cover={{ width: 600, height: 400 }}
          imgSrc={mediaLink}
        />
        <Card.Body>
          <Card.Title>Media Left</Card.Title>
          <p>{cardContent}</p>
        </Card.Body>
      </Card>
      <Card as={Grid} childWidth={{ atSm: '1/2' }} gutter="collapse" margin>
        <Card.Media
          alignTo="right"
          cover={{ width: 600, height: 400 }}
          imgSrc={mediaLink}
          order={{ last: '@s' }}
        />
        <Card.Body>
          <Card.Title>Media Right</Card.Title>
          <p>{cardContent}</p>
        </Card.Body>
      </Card>
    </Block>
  ))

  .add('Badge', () => (
    <Block margin={{ all: 'large' }}>
      <Card width={{ atMd: '1/2' }}>
        <Card.Badge as={Label}>Badge</Card.Badge>
        <Card.Title>Title</Card.Title>
        <Card.Content>{cardContent}</Card.Content>
      </Card>
    </Block>
  ));
