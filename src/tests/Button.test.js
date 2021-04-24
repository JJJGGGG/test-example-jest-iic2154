import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Button from "../Button";

test('button changes color on hover', () => {
    const {getByRole} = render(<Button>hola</Button>);
    const button = getByRole('button', {name: 'hola'});
    expect(button).toHaveStyle('color:blue');
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('color:red');
    fireEvent.mouseLeave(button);
    expect(button).toHaveStyle('color:blue');
})