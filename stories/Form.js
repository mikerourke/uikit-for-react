import React from 'react';
import { storiesOf } from '@storybook/react';
import { Block, Form, Grid } from '../../src/components';

Form.displayName = 'Form';

storiesOf('Form', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Form>
        <Form.Fieldset>
          <Form.Legend>Legend</Form.Legend>
          <Form.Field margin>
            <Form.Input placeholder="Input" />
          </Form.Field>
          <Form.Field margin>
            <Form.Select>
              <option>Option 01</option>
              <option>Option 01</option>
            </Form.Select>
          </Form.Field>
          <Form.Field margin>
            <Form.TextArea rows={5} placeholder="Textarea" />
          </Form.Field>
          <Form.Field as={Grid} margin gutter="small" childWidth="auto">
            <Form.Radio name="radio2" checked label=" A" />
            <Form.Radio name="radio2" label=" B" />
          </Form.Field>
          <Form.Field as={Grid} margin gutter="small" childWidth="auto">
            <Form.Checkbox checked label=" A" />
            <Form.Checkbox label=" B" />
          </Form.Field>
          <Form.Field>
            <Form.Range defaultValue={2} min={0} max={10} step={0.1} />
          </Form.Field>
        </Form.Fieldset>
      </Form>
    </Block>
  ))

  .add('States modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Form.Field margin>
        <Form.Input
          danger
          width="medium"
          placeholder="form-danger"
          value="form-danger"
        />
      </Form.Field>
      <Form.Field margin>
        <Form.Input
          success
          width="medium"
          placeholder="form-success"
          value="form-success"
        />
      </Form.Field>
      <Form.Field margin>
        <Form.Input
          disabled
          width="medium"
          placeholder="disabled"
          value="disabled"
        />
      </Form.Field>
    </Block>
  ))

  .add('Size modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Form>
        <Form.Field margin>
          <Form.Input size="large" width="medium" placeholder="Large" />
        </Form.Field>
        <Form.Field margin>
          <Form.Input width="medium" placeholder="Default" />
        </Form.Field>
        <Form.Field margin>
          <Form.Input size="small" width="medium" placeholder="Small" />
        </Form.Field>
      </Form>
    </Block>
  ))

  .add('Width modifiers', () => (
    <Block margin={{ all: 'large' }}>
      <Form>
        <Form.Field margin>
          <Form.Input width="large" placeholder="Large" />
        </Form.Field>
        <Form.Field margin>
          <Form.Input width="medium" placeholder="Medium" />
        </Form.Field>
        <Form.Field margin>
          <Form.Input width="small" placeholder="Small" />
        </Form.Field>
        <Form.Field margin>
          <Form.Input width="xsmall" placeholder="XSmall" />
        </Form.Field>
        <Form.Field margin>
          <Form.Input width="1/2" placeholder="uk-width-1-2" />
        </Form.Field>
      </Form>
    </Block>
  ))

  .add('Blank modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Form>
        <Form.Field margin>
          <Form.Input blank width="medium" placeholder="Form blank" />
        </Form.Field>
      </Form>
    </Block>
  ));
