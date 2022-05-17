import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Laskuri from './components/Laskuri'
 
afterEach(cleanup);
 
it('pitäisi olla enabled', ()=> {
    const { getByTestId } = render(<Laskuri />);
    expect(getByTestId('nappi-ylos')).not.toHaveAttribute('disabled');
})
 
it('pitaisi olla disabled', ()=> {
    const { getByTestId } = render(<Laskuri />);
    expect(getByTestId('nappi-alas')).toBeDisabled();
})