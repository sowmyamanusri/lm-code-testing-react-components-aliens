import {useState} from 'react';
import {ErrorMessage} from './error_msg';
export interface NumberOfBeingsProps{
    numberOfBeings:number, 
    onChangeNumberOfBeings:(e:React.ChangeEvent<HTMLInputElement>)=>void;

}

const NumberOfBeings : React.FC<NumberOfBeingsProps> =({numberOfBeings,onChangeNumberOfBeings})=>{
    const [errorMessage , setErrorMessage] =useState<string|undefined>('');
    
    const validate :(inputStr : string) =>string|undefined =(inputStr)=>{

        const value =parseInt(inputStr);
        if(value < 1000000000){
            return( "input number should be greater than 1,000,000,000")
        }
     if(inputStr.match(/[^0-9]/))
           return("characters and special characters are not allowed");
        
    }
    return(
    <>
    <div className="container">
    <label htmlFor = "numberOfBeings" >Number of Beings : </label>
    <input  type="number" data-testid = "numberOfBeings" value ={numberOfBeings} onChange={(e)=>{const errorMessage =validate(e.target.value);
        setErrorMessage(errorMessage);onChangeNumberOfBeings(e)}}/>
         <ErrorMessage errorMessage ={errorMessage}/>
    </div>
   
    
    </>
)
    }

export default NumberOfBeings;