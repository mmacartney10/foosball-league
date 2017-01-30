import React from 'react';
import Counter from '../app/counter/counter';
import renderer from 'react-test-renderer';

test('Count increments by one when button clicked', () => {

  const component = renderer.create(
    <Counter/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
