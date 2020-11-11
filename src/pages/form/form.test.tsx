import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Form from './form';

// describe("form component", (): void => {
//   test("component renders", (): void => {
//     const { getByText, getByTestId } = render(<Form></Form>);

//     fireEvent.change(getByTestId("a"), { target: { value: "22-01-2020" } });

//     expect(getByTestId("a")).toBe(null);
//     expect(getByText("Afspraakje maken?")).toBeInstanceOf(HTMLHeadingElement);
//     expect(getByText("Afspraakje maken?")).toBeInTheDocument();
//   });
// });

// describe("simple calc", (): void => {
//   test("addition", (): void => {
//     const load1 = 500;
//     const load2 = 900;

//     expect(load1 + load2).toBeLessThan(100);
//   });
// });

const setup = () => {
  const utils = render(<Form />);
  const input = utils.getByLabelText('time');
  return {
    input,
    ...utils
  };
};

describe('handle text change', () => {
  test('testing the handle text change', () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: { value: '1991-12-12' }
    });
    console.expect((input as HTMLInputElement).value).toEqual('1991-12-12');
  });
});
