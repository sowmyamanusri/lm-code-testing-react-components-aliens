

const  SpeciesName :React.FC<{speciesName:string, onChangeSpeciesName:any}> = ({speciesName, onChangeSpeciesName}) =>(
    <>
    <div className ="container">
   <label htmlFor="speciesName">Species Name :  </label>
    <input type ="text" id="speciesName" className = "speciesName"
     value = {speciesName} onChange ={onChangeSpeciesName} />
    </div>
    </>
)

export default SpeciesName;