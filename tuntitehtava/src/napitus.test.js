import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Laskuri from './components/napitus'
 
afterEach(cleanup);
 
it('lisäys onnistuu', ()=> {
    const { getByTestId } = render(<Laskuri />);
 
    fireEvent.click(getByTestId('nappi-ylos'));
    
    expect(getByTestId('laskuri')).toHaveTextContent('1');
});
 
it('nollaus onnistuu', ()=> {
    const { getByTestId } = render(<Laskuri />);
 
    fireEvent.click(getByTestId('nappi-alas'));
 
    expect(getByTestId('laskuri')).toHaveTextContent('0');
});