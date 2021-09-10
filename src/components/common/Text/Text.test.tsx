/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Text from './Text';

describe('Text', (): void => {
  let wrapper: ShallowWrapper<void>;

  it('should be defined', (): void => {
    wrapper = shallow(<Text>Text</Text>);
    expect(wrapper).toBeDefined();
  });
});