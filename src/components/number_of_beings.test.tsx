import NumberOfBeings, {NumberOfBeingsProps} from "./number_of_beings ";
import {render,screen , fireEvent} from '@testing-library/react';

describe("NumberOfBeings component",()=>{
    
    const onChange =  jest.fn();
    const numberOfBeings :NumberOfBeingsProps={
        numberOfBeings:1000000000,
        onChangeNumberOfBeings:onChange
    }
    it('when component is rendered, the number of being text label is present',()=>{
        render(<NumberOfBeings {...numberOfBeings} />);
        const word = screen.getByText(/Number of Beings/i);
         expect(word).toBeInTheDocument();
       })
    
    it(`Given the required props,
    when the component is rendered,
    Then the number of beings should be present`,()=>{
        render(<NumberOfBeings {...numberOfBeings} />);

      expect(screen.getByRole('spinbutton')).toHaveDisplayValue('1000000000')
    })
    it('When NumberOfBeings component is rendered,the number of beings name input field should be present',()=>{
        render(<NumberOfBeings {...numberOfBeings} />);
        const inputEl = screen.getByTestId("numberOfBeings");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type","number");
   
      })

      it('onChange the input value',() => {
        render(<NumberOfBeings {...numberOfBeings}/>)
        const inputValue =screen.getByTestId("numberOfBeings");
        fireEvent.change(inputValue,{target:{value: 1000000007}});
      })

    

})