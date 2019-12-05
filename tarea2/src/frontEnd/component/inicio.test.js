import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './inicio';
import renderer from 'react-test-renderer';
import {Counter} from './inicio'

test('Probando el funcionamiento de la Home', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Inicio color={'item'} cambiarColor={() => {}} imagenes={[]}  />, div);
});

describe('Counter', () => {
	test('snapshot renders', () => {
		const component = renderer.create(<Counter counter={1} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});