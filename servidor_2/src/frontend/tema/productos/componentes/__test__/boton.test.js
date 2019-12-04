import React from 'react';
import ReactDOM from 'react-dom'
import Button from './../boton'
import {render, fireEvent} from '@testing-library/react'
import "jest-dom/extend-expect"
import { exportAllDeclaration } from '@babel/types';


 it ("rendesizar correctamente", ()=>{
        const {querByTestId, querylabel}= render(<Button/>)
        expect(querByTestId("button")).toBeTruthy()
    })