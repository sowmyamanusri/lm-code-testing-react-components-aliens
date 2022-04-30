import PlanetName,{PlanetNameProps} from './planet_name';
import {render,screen,fireEvent} from '@testing-library/react';


describe("PlanetName component",()=>{
    
const onChange =  jest.fn();
const planetName :PlanetNameProps={
    planetName:"Earth", 
    onChangePlanetName:onChange
}


it('when component is rendered, the planet name text label is present',()=>{
    render(<PlanetName {...planetName} />);
    const word = screen.getByText(/Planet Name/i);
     expect(word).toBeInTheDocument();
   })


it(`Given the required props,
    when the component is rendered,
    Then the species name should be present`,()=>{
        render(<PlanetName {...planetName} />);

      expect(screen.getByRole('textbox')).toHaveDisplayValue('Earth')
    })


    it('When PlanetName component is rendered,the planet name input field should be present',()=>{
        render(<PlanetName {...planetName} />)
        const inputEl = screen.getByTestId("planetName");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type","text");
   
      })

      it('onChange the input value',() => {
        render(<PlanetName {...planetName} />)
        const inputValue =screen.getByTestId("planetName");
        fireEvent.change(inputValue,{target:{value:'Janssen'}});
      })
    })