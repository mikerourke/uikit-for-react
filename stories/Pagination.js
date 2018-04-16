import React from 'react';
import { storiesOf } from '@storybook/react';
import { Division, Margin, Pagination } from '../src/components';

Pagination.displayName = 'Pagination';

storiesOf('Pagination', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Pagination as={Margin}>
        <Pagination.Previous />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item disabled>...</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Item>6</Pagination.Item>
        <Pagination.Item active>7</Pagination.Item>
        <Pagination.Item>8</Pagination.Item>
        <Pagination.Item>9</Pagination.Item>
        <Pagination.Item>10</Pagination.Item>
        <Pagination.Item disabled>...</Pagination.Item>
        <Pagination.Item>20</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </Division>
  ))

  .add('Alignment', () => (
    <Division margin={{ all: 'large' }}>
      {['center', 'right'].map((flexLocation, idx) => (
        <Pagination
          as={Margin}
          key={flexLocation}
          flex={{ justifyContent: flexLocation, display: false }}
          margin={idx === 0 ? undefined : { top: 'medium' }}
        >
          <Pagination.Previous />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item disabled>...</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Item>6</Pagination.Item>
          <Pagination.Item active>7</Pagination.Item>
          <Pagination.Item>8</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      ))}
    </Division>
  ))

  .add('Previous and next', () => (
    <Division margin={{ all: 'large' }}>
      <Pagination>
        <Pagination.Item>
          <Pagination.Previous margin={{ right: 'small' }} /> Previous
        </Pagination.Item>
        <Pagination.Item margin={{ left: 'auto' }}>
          {'Next '}
          <Pagination.Next margin={{ left: 'small' }} />
        </Pagination.Item>
      </Pagination>
    </Division>
  ));
