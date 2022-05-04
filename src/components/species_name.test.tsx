import SpeciesName , {SpeciesNameProps}from './species_name';
import {render, screen, fireEvent} from '@testing-library/react';

describe("SpeciesName component",()=>{
    
const onChange =  jest.fn();
const speciesName :SpeciesNameProps={
    speciesName:"humans", 
    onChangeSpeciesName:onChange
}
/*
beforeEach(()=>{
    onChange.mockClear();
    render(<SpeciesName {...speciesName} />);
})*/


it('when component is rendered, the Species Name text label is present',()=>{
     render(<SpeciesName {...speciesName} />);
     const word = screen.getByText(/Species Name/i);
      expect(word).toBeInTheDocument();
    })

    it('when component renderd, checking the value of the input field',()=>{
        const {getByTestId} =render(<SpeciesName {...speciesName} />);
      
        const sName = getByTestId('speciesName').value; 
       expect(sName).toBe("humans");
    
    })
    
    it(`Given the required props,
    when the component is rendered,
    Then the species name should be present`,()=>{
      render(<SpeciesName {...speciesName} />);

      expect(screen.getByRole('textbox')).toHaveDisplayValue('humans')
    })

   it('render the component, the species name input field should',()=>{
     render(<SpeciesName {...speciesName} />)
     const inputEl = screen.getByTestId("speciesName");
     expect(inputEl).toBeInTheDocument();
     expect(inputEl).toHaveAttribute("type","text");

   })

   it('onChange the input value',() => {
     render(<SpeciesName {...speciesName} />)
     const inputValue =screen.getByTestId("speciesName");
     fireEvent.change(inputValue,{target:{value:'Birds'}});
   })
  
  })

