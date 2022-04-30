import TextArea ,{TextAreaProps}from './text_area';
import {render, screen, fireEvent} from '@testing-library/react';

describe("TextArea component",()=>{
    
    const onChange =  jest.fn();
    const textArea :TextAreaProps={
       reasonForSparing:'List the reason for sparing  ',
        onChangeReasonForSparing:onChange
    }
    it('when component is rendered, the Reason for sparing label text label is present',()=>{
        render(<TextArea {...textArea}/>);
        const word = screen.getByText(/Reason for Sparing/gi);
         expect(word).toBeInTheDocument();
       })
    
    
    it('When TextArea component is rendered,the reason for sparing  input field should be present',()=>{
        render(<TextArea {...textArea}/>);
        const textAreaEl = screen.getByTestId("reason");
        expect(textAreaEl).toBeInTheDocument();
    })

      it('onChange the input value',() => {
        render(<TextArea {...textArea}/>)
        const inputValue =screen.getByTestId("reason");
        fireEvent.change(inputValue,{target:{value: 'reason for sparing describes'}});
      })

    

})