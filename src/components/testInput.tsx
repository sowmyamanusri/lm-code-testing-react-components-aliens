import { useState, useEffect } from "react";
export interface AlliensApplicationFormProps {
  speciesName: string;
  planetName: string;
  numberOfBeings: number;
  options: string;
  reasonForSparing: string;
}

const AlliensApplicationForm: React.FC<AlliensApplicationFormProps> = () => {
  const initialState = {
    speciesName: "Animals",
    planetName: "Earth",
    numberOfBeings: 1000000000,
    options: "4",
    reasonForSparing: "I am living on the Earth for long years ago",
  };
  const [formValues, setFormValues] =
    useState<AlliensApplicationFormProps>(initialState);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);
  }

  useEffect(() => {
    console.log(formErrors);
    if (formErrors.length === 0 && isSubmit === true) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values: any) => {
    const errors: any  = {};
    if (values.speciesName.length < 3 || values.speciesName.length > 23) {
      errors.speciesName =
        "Character should not be less than 3 and not more than 23 ";
    } else if (values.speciesName.match(/[^a-zA-Z]/)) {
      errors.speciesName = "numbers and special characters are not allowed";
    }
    if (values.planetName.length < 2 || values.planetName.length > 49) {
      errors.planetName =
        "Character should not be less than 2 and not more than 49";
    } else if (values.planetName.match(/[^a-zA-Z0-9]/)) {
      errors.planetName = "special characters are not allowed";
    }
    if (parseInt(values.numberOfBeings) < 1000000000) {
      errors.numberOfBeings =
        "input number should be greater than 1,000,000,000";
    } else if (values.numberOfBeings.match(/[^0-9]/)) {
      errors.numberOfBeings =
        "characters and special characters are not allowed";
    }
    if (values.options === "Not 4") {
      errors.options = "An error";
    }
    if (
      values.reasonForSparing.length < 17 ||
      values.reasonForSparing.length > 153
    ) {
      errors.reasonForSparing = "Character should be between 17 to 153";
    }

    return errors;
  };

  return (
    <div className="form__container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form className="form__section">
        <h1 className="form__header">Allien's Application Form </h1>
        <div className="container">
          <label className="form__label">Species Name:</label>
          <input
            aria-label="speciesName"
            type="text"
            data-testid="speciesName"
            value={formValues.speciesName}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.speciesName}</p>
        <div className="container">
          <label className="form__label">Planet Name:</label>
          <input
            aria-label="planetName"
            type="text"
            id="planetName"
            value={formValues.planetName}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.planetName}</p>
        <div className="container">
          <label className="form__label">Number of Beings:</label>
          <input
            aria-label="Number of BeingsnumberOfBeings"
            type="number"
            value={formValues.numberOfBeings}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.numberOfBeings}</p>
        <div className="container">
          <label className="form__label">What is 4 + 4 ?:</label>
          <select
            aria-label="options"
            value={formValues.options}
            onChange={handleChange}
          >
            <option value="4">4</option>
            <option value="Not 4">Not 4</option>
          </select>
        </div>
        <p>{formErrors.options}</p>
        <div className="container">
          <label className="form__label">Reason for Sparing:</label>
          <textarea
            aria-label="reasonForSparing"
            value={formValues.reasonForSparing}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.reasonForSparing}</p>
        <div className="container">
          <button type="submit" className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlliensApplicationForm;
