import {useState} from 'react';
import{ErrorMessage} from './error_msg';
interface PlanetNameProps{
  planetName:string,
  onChangePlanetName : (e:React.ChangeEvent<HTMLInputElement>) => void
}
const PlanetName : React.FC <PlanetNameProps> = ({planetName,onChangePlanetName})=>{
  const [errorMessage , setErrorMessage] =useState<string|undefined>('');
    
  const validate :(inputStr : string) =>string|undefined =(inputStr)=>{
    const  valueLength = inputStr.length;
      if(valueLength <2 || valueLength >49){
            return ("Character should not be less than 2 and not more than 49 ");
        }else if(inputStr.match(/[^a-zA-Z0-9]/)){
         return("special characters are not allowed");
  }
}
  return(
    <>
     <div className ="container">
    <label htmlFor="planetName">Planet Name :  </label>
    <input id ="planetName" type="text" value ={planetName} onChange ={(e)=>{const errorMessage = validate(e.target.value);
      setErrorMessage(errorMessage);onChangePlanetName(e)}} />
      <ErrorMessage errorMessage ={errorMessage}/>
     </div>
    </>
)
}

export default PlanetName;