import test from 'ava'

import { PropertyName } from '..'

const instance = new PropertyName({
	value: 'NAME',
	raws: {
		before: 'BEFORE__',
		after: '__AFTER',
	},
})

test('snapshot', t => {
	t.snapshot(instance)
})

test('toString() snapshot', t => {
	t.snapshot(instance.toString())
})

test('pretty() snapshot', t => {
	t.snapshot(instance.pretty())
})
