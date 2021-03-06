/* Copyright 2018 Schibsted Products & Technology AS. Licensed under the terms of the MIT license.
 * See LICENSE.md in the project root.
 */

'use strict';

const SDKError = require('../src/SDKError');

describe('SDKError', () => {
    test('Should be able to stringify an error', () => {
        const e = new SDKError('foo', { bar: 'baz' });

        // FIXME: Enable this when.. we have babel7 and it (hopefully) works with Jest+Coverage
        // expect(e.toString()).toBe('SDKError: foo\n    bar: baz');
        expect(e.toString()).toMatch(/SDKError: foo/);
    });
});
