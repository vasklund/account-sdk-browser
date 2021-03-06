/* Copyright 2018 Schibsted Products & Technology AS. Licensed under the terms of the MIT license.
 * See LICENSE.md in the project root.
 */

'use strict';

const Payment = require('../payment');

describe('Payment', () => {

    describe('constructor()', () => {
        test('throws if the options object is not passed to the constructor', () => {
            expect(() => new Payment())
                .toThrowError(/Cannot read property 'clientId' of undefined/);
        });

        test('throws if the server setting is missing or has wrong type', () => {
            expect(() => new Payment({ client_id: 'xxxx' }))
                .toThrowError(/clientId parameter is required/);
            expect(() => new Payment({ client_id: 'xxxx', server: true }))
                .toThrowError(/clientId parameter is required/);
        });

        test('throws if the client_id setting is missing or has wrong type', () => {
            expect(() => new Payment({ server: 'spp.dev' }))
                .toThrowError(/clientId parameter is required/);
            expect(() => new Payment({ server: 'spp.dev', client_id: true }))
                .toThrowError(/clientId parameter is required/);
        });
    });

});
