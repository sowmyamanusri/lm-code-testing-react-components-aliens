import { ErrorMessage,ErrorMessageProps } from "./error_msg";
import {render, screen} from '@testing-library/react';

describe("ErrorMessage",()=>{
   
 it('when component render , SpeciesName input error message text',()=>{
    const errorMessage :ErrorMessageProps ={
        errorMessage :"Character should not be less than 3 and not more than 23 "
    }
     render(<ErrorMessage {...errorMessage}/>);
     expect(screen.getByText(/Character should not be less than 3 and not more than 2/i)).toBeInTheDocument();
})
it('when component render ,PlantName error message text',()=>{
    const errorMessage :ErrorMessageProps ={
        errorMessage :"special characters are not allowed "
    }
     render(<ErrorMessage {...errorMessage}/>);
     expect(screen.getByText(/special characters are not allowed/i)).toBeInTheDocument();
})

it('when component render ,NumberOfBeings error message text',()=>{
    const errorMessage :ErrorMessageProps ={
        errorMessage :"input number should be greater than 1,000,000,000"
    }
     render(<ErrorMessage {...errorMessage}/>);
     expect(screen.getByText(/input number should be greater than 1,000,000,000/i)).toBeInTheDocument();
})
it('when component render ,when the option is Not4 error message text',()=>{
    const errorMessage :ErrorMessageProps ={
        errorMessage :"an error"
    }
     render(<ErrorMessage {...errorMessage}/>);
     expect(screen.getByText(/an error/i)).toBeInTheDocument();
})
it('when component render ,textArea error message text',()=>{
    const errorMessage :ErrorMessageProps ={
        errorMessage :"Character should be between 17 to 153"
    }
     render(<ErrorMessage {...errorMessage}/>);
     expect(screen.getByText(/Character should be between 17 to 153/i)).toBeInTheDocument();
})
})
