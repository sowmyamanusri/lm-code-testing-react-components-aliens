
interface NumberOfBeingsProps{
    numberOfBeings:number, 
    onChangeNumberOfBeings:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    reasonForSparing:string,
    onChangeReasonForSparing:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
    options:any;
    onChangeOptions:(e:React.ChangeEvent<HTMLSelectElement>) => void;

}

const NumberOfBeings : React.FC<NumberOfBeingsProps> =({numberOfBeings,onChangeNumberOfBeings,reasonForSparing,
onChangeReasonForSparing,options,onChangeOptions})=>(
    <>
    <div className="container">
    <label htmlFor = "numberOfBeings" >Number of Beings : </label>
    <input type="number" id = "numberOfBeings" value ={numberOfBeings} onChange={onChangeNumberOfBeings}/>
    </div>
    <div className="container">
    <label htmlFor ="options">What is 2 + 2 :</label>
    <select id="options" value ={options} onChange={onChangeOptions}> 
     <option value ="4">4</option>
     <option value ="Not 4">Not 4</option>
    </select>
    </div>
    <div className="container">
    <label htmlFor = "reason" >Reason for Sparing : </label>
    <textarea  id="reason"  value ={reasonForSparing} onChange={onChangeReasonForSparing}/>
    </div>
    
    </>
)

export default NumberOfBeings;