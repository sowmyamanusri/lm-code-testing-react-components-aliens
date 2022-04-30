import {useState} from 'react';
import {ErrorMessage} from './error_msg';
export interface SelectOptionProps{
    options:any;
    onChangeOptions:(e:React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectOption:React.FC<SelectOptionProps> = ({options,onChangeOptions})=>{
    const [errorMessage, setErrorMessage] = useState<string|undefined>('');
    const validate :(str : string) =>string|undefined =(str)=>{
        if(str === "Not 4"){
            return "an error";
        }
    }
    return(
    <div className="container">
    <label htmlFor ="options">What is 2 + 2 :</label>
    <select data-testid="options" value ={options} onChange={(e)=>{const errorMessage = validate(e.target.value);
        setErrorMessage(errorMessage);onChangeOptions(e)}}> 
     <option value ="4">4</option>
     <option value ="Not 4">Not 4</option>
    </select>
     <ErrorMessage errorMessage ={errorMessage}/>
    </div>
    )

}
export default SelectOption;