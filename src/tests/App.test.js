import { act, fireEvent, getByAltText, render, waitFor } from "@testing-library/react";
import React from "react";
import { mockComponent } from "react-dom/test-utils";

import App from "../App";
import * as myFunc from "../searchProducts";


test('button creates a new div', (done) => {
        const {getByRole, getByText} = render(<App />);
        const button = getByRole('button', {name: 'hola'});
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        const div0 = getByText('div #0');
        expect(div0).toBeInTheDocument();
        fireEvent.click(button);
        const div1 = getByText('div #1');
        expect(div0).toBeInTheDocument();
        expect(div1).toBeInTheDocument();
        done();
})

test('anime names are displayed', async () => {
    myFunc.default = jest.fn().mockResolvedValue({
        "data": [
            {
                "id": 1,
                "attributes": {
                    "titles": {
                        "en_jp": "bad title",
                    }
                }
            }
        ]
    })
    const { findByText } = render(<App />);
    const name = await findByText(/bad title/i);
    expect(myFunc.default).toBeCalled();
    expect(name).toBeInTheDocument();
});
