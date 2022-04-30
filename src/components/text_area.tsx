import {useState} from 'react';
import {ErrorMessage} from './error_msg';

export interface TextAreaProps {
    reasonForSparing:string,
    onChangeReasonForSparing:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
}



const TextArea : React.FC<TextAreaProps>=({reasonForSparing,onChangeReasonForSparing})=>{
    const[errorMessage,setErrorMessage] = useState<string|undefined>('')

const validate :(inputStr : string) =>string|undefined =(inputStr)=>{
 const  strLength = inputStr.length;
 if(strLength  < 17 || strLength >153){
     return ('Character should be between 17 to 153');
 }

}
    return (
    <div className="container">
    <label htmlFor = "reason" >Reason for Sparing : </label>
    <textarea data-testid="reason"  value ={reasonForSparing} onChange={(e)=>{const errorMessage =validate(e.target.value);
        setErrorMessage(errorMessage);onChangeReasonForSparing(e)}}/>
    <ErrorMessage errorMessage ={errorMessage}/>
    </div>

    )
}

export default TextArea;