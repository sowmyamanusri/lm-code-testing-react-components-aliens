import { render ,screen, fireEvent} from '@testing-library/react';
 
import W12MForm from './W12MForm';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);
	

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});

it('render the component, the  input field should be present and its type id submit',()=>{
	render(<W12MForm />)
	const inputEl = screen.getByTestId("submit");
	expect(inputEl).toBeInTheDocument();
	expect(inputEl).toHaveAttribute("type","submit");

  })


