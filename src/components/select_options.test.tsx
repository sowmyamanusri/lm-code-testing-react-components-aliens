import SelectOption ,{SelectOptionProps } from './select_options';
import {render, screen, fireEvent} from '@testing-library/react';


describe("SelectOption component",()=>{
    
    const onChange =  jest.fn();
    const selectOption :SelectOptionProps = {
        options : 4,
        onChangeOptions:onChange
    }
   
    it('when component render, it should the text waht is 2+2',() =>{
        render(<SelectOption {...selectOption} />);
        const inputEl = screen.getByText(/what is 2 \+ 2 :/i);
        expect(inputEl).toBeInTheDocument();

    })

   
    it('when you on change the options, the text should be present',()=>{
        render(<SelectOption {...selectOption} />);
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("Not 4"));
        expect(screen.getByRole('combobox')).toHaveDisplayValue('4');
       
    })
   


})