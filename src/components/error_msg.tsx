export interface ErrorMessageProps {
  errorMessage: string | undefined;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <>
    <div className="error__container">
      <span className="errorMessage">{errorMessage}</span>
    </div>
  </>
);
