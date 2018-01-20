import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Accordion from '../components/Accordion';
import Container from '../components/Container';

Accordion.displayName = 'Accordion';

const firstParagraph = <p>{faker.lorem.paragraph()}</p>;
const secondParagraph = <p>{faker.lorem.paragraph()}</p>;
const thirdParagraph = <p>{faker.lorem.paragraph()}</p>;

storiesOf('Accordion', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion>
        <Accordion.Item>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>
            {firstParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>
            {secondParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>
            {thirdParagraph}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ))

  .add('No collapsing', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion collapsible={false}>
        <Accordion.Item>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>
            {firstParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>
            {secondParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>
            {thirdParagraph}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ))

  .add('Multiple open items', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion multiple openIndex={[1, 2]}>
        <Accordion.Item>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>
            {firstParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>
            {secondParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>
            {thirdParagraph}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ))

  .add('Set open items', () => (
    <Container margin={{ all: 'large' }}>
      <Accordion multiple>
        <Accordion.Item open>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>
            {firstParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>
            {secondParagraph}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>
            {thirdParagraph}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Container>
  ));
