
interface ErrorMessageProps{
    errorMessage : string|undefined;
}

export const ErrorMessage: React.FC<ErrorMessageProps> =({errorMessage})=>
    <>
     <span className="errorMessage">{errorMessage}</span>
    </>


