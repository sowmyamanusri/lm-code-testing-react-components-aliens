import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './species_name';
import PlanetName from './planet_name';
import NumberOfBeings from './number_beings ';



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
			<form>
			<SpeciesName speciesName ={speciesName}
			 onChangeSpeciesName ={(e:any)=>setSpeciesName(e.target.value)}/>
			 <PlanetName planetName ={planetName} 
			 onChangePlanetName ={(e:any)=>setPlanetName(e.target.value)}/>
			 <NumberOfBeings numberOfBeings ={numberOfBeings}
			  onChangeNumberOfBeings ={(e:any)=>setNumberOfBeings(e.target.value)}
			  options ={options}  onChangeOptions ={(e:any) =>setOptions(e.target.value)}
			  reasonForSparing={reasonForSparing} 
			  onChangeReasonForSparing ={(e:any)=>setReasonForSparing(e.target.value)}/>
			  <div className="container">
             <button type="button" className="btn" id="btn" onClick ={handleSubmit}>Submit</button>
             </div>
			 </form>
			  <div id ="formValues"></div>
			</section>
			
	);
};

export default W12MForm;
