import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './species_name';
import PlanetName from './planet_name';
import NumberOfBeings from './number_of_beings ';
import SelectOption from './select_options';
import TextArea from './text_area';
import AlliensApplicationForm from './testInput';


const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('humans');
	const [planetName, setPlanetName] = useState<string>('Earth');
	const [numberOfBeings, setNumberOfBeings] = useState<number>(100);
	const [reasonForSparing, setReasonForSparing] = useState<string>('List reason for sparing...')
	const [options,setOptions] = useState<string>('4');

	
	
    
	 function handleSubmit(e:any){
		 e.preventDefault();
		console.log(speciesName);
        console.log(planetName);
		console.log(numberOfBeings);
		console.log(options);
		console.log(reasonForSparing);
	}

		return (
		<section className='w12MForm'>
			<W12MHeader />
			<form onSubmit ={handleSubmit} data-testid ="form">
			<h1 className ="form__header">Application Form</h1>
			<SpeciesName speciesName ={speciesName}
			 onChangeSpeciesName ={(e:any)=>setSpeciesName(e.target.value)}/>
			 <PlanetName planetName ={planetName} 
			 onChangePlanetName ={(e:any)=>setPlanetName(e.target.value)}/>
			 <NumberOfBeings numberOfBeings ={numberOfBeings}
			  onChangeNumberOfBeings ={(e:any)=>setNumberOfBeings(e.target.value)}/>
			<SelectOption  options ={options}  onChangeOptions ={(e:any) =>setOptions(e.target.value)} />
			 <TextArea reasonForSparing={reasonForSparing} 
			 onChangeReasonForSparing ={(e:any)=>setReasonForSparing(e.target.value)}/>
			  <div className="container">
             <input type ="submit" className="submit" data-testid ="submit" placeholder="Submit" />
             </div>
			 </form>
			  <div id ="formValues">
				  <AlliensApplicationForm speciesName={speciesName} planetName ={planetName} 
				  numberOfBeings={numberOfBeings} options={options} reasonForSparing ={reasonForSparing}/>
			  </div>
            
			</section>

		
			
	);
};

export default W12MForm;
