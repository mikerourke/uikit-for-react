import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from '../components/Accordion';
import Container from '../components/Container';

Accordion.displayName = 'Accordion';

const firstParagraph = <p>{faker.lorem.paragraph()}</p>;
const secondParagraph = <p>{faker.lorem.paragraph()}</p>;
const thirdParagraph = <p>{faker.lorem.paragraph()}</p>;

storiesOf('Accordion', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion collapsible>
        <Accordion.Item>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ))

  .add('No collapsing', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion collapsible={false}>
        <Accordion.Item>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ))

  .add('Multiple open items', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion collapsible multiple>
        <Accordion.Item>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ))

  .add('Set open items', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion multiple openIndex={[0, 2]}>
        <Accordion.Item open>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ))

  .add('Event handlers', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion
        collapsible
        onBeforeHide={action('onBeforeHide')}
        onBeforeShow={action('onBeforeShow')}
        onHidden={action('onHidden')}
        onHide={action('onHide')}
        onShow={action('onShow')}
        onShown={action('onShown')}
      >
        <Accordion.Item open>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ));
