import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';


test("Component  should be rendered", () => {
  render(<App />);
  const usernameInputEl = screen.getByTestId(/first name/i);
  expect(usernameInputEl).toBeInTheDocument();
   const  lastname=screen.getByTestId(/last name/i)
   expect(lastname).toBeInTheDocument();
   expect(screen.getByTestId(/RadioButtonGroup/i)).toBeInTheDocument();
   expect(screen.getByTestId(/RadioButton Option 1/i)).toBeInTheDocument();
   expect(screen.getByTestId(/RadioButton Option 2/i)).toBeInTheDocument();
   expect(screen.getByTestId(/RadioButton Option 3/i)).toBeInTheDocument();
   expect(screen.getByTestId(/Submit Button/i)).toBeInTheDocument();
   
});

test("text space empty",()=>{
  render(<App></App>);
  expect(screen.getByTestId(/first name/i).value).toBe("");
  expect(screen.getByTestId(/last name/i).value).toBe("");


})
test("Radio tests",()=>{
  render(<App></App>);
  const radioButton1 = screen.getByTestId(/RadioButton Option 1/i);
  const radioButton2 = screen.getByTestId(/RadioButton Option 2/i);
  const radioButton3 = screen.getByTestId(/RadioButton Option 3/i);
 
  expect(radioButton1.defaultChecked).toBe(true)
  expect(radioButton2.defaultChecked).toBe(false)
  
 
  //expect(screen.getByLabelText(/option 2/i)).toBe("")


})
test("Radio tests",()=>{
  render(<App></App>);
  const button=screen.getByTestId(/Submit Button/i)
expect(button.textContent).toBe("Submit")

})
test("name input should change", () => {
  render(<App />);
  const firstname = screen.getByTestId(/first name/i);
  const testValue = "test";
  
  fireEvent.change(firstname, { target: { value: testValue } });
  expect(firstname.value).toBe("test");

  fireEvent.change(screen.getByTestId(/last name/i),{target:{value:"test"}})
  expect(screen.getByTestId(/last name/i).value).toBe("test")

});
