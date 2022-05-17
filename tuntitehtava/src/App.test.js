import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Laskuri from './App'
 
afterEach(cleanup)
 
it('snapshot kokeilu', () => {
    const { asFragment } = render(<Laskuri />);
 
    expect(asFragment(<Laskuri />)).toMatchSnapshot()
});