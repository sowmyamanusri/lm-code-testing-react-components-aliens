import {useState} from 'react';
import {ErrorMessage} from './error_msg'

export interface SpeciesNameProps{
    speciesName:string, 
    onChangeSpeciesName : (e:React.ChangeEvent<HTMLInputElement>) => void
}

const  SpeciesName :React.FC<{speciesName:string, onChangeSpeciesName:any}> = ({speciesName, onChangeSpeciesName}) =>{
    const [errorMessage , setErrorMessage] =useState<string|undefined>('');
    
    const validate :(inputStr : string) =>string|undefined =(inputStr)=>{
    const  valueLength = inputStr.length;
      if(valueLength <3 || valueLength >23){
            return ("Character should not be less than 3 and not more than 23 ");
        }else if(inputStr.match(/[^a-zA-Z]/)){
           return("numbers and special characters are not allowed");
        
    }
}
    return(
    <>
    <div className ="container">
   <label htmlFor="speciesName">Species Name :  </label>
    <input type ="text" data-testid="speciesName" className = "speciesName"
     value = {speciesName} onChange ={(e)=>{const errorMessage =validate(e.target.value);
        setErrorMessage(errorMessage); onChangeSpeciesName(e);
        }} />
         <ErrorMessage errorMessage ={errorMessage}/>
    </div>
    </>
    )
}

export default SpeciesName;