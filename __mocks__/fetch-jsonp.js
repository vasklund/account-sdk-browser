const { URL } = require('url');

const mockHasSessionLoginRequired = {
    error: {
        code: 401,
        type: 'LoginException',
        description: 'Autologin required'
    },
    response: {
        result: false,
        serverTime: 1520599943,
        expiresIn: null,
        baseDomain: 'localhost',
        visitor: {
            uid: 'Xytpn4Xoi8rb9Xso27ks',
            user_id: '36424'
        }
    }
};
const mockHasSessionUserException = {
    error: {
        code: 401,
        type: 'UserException',
        description: 'No session found'
    },
    response: {
        result: false,
        serverTime: 1520599943,
        expiresIn: null,
        baseDomain: 'localhost',
        visitor: {
            uid: 'Xytpn4Xoi8rb9Xso27ks',
            user_id: '36424'
        }
    }
};
const mockSPiDOk = {
    result: true,
    serverTime: 1520610964,
    expiresIn: 2592000,
    visitor: {
        uid: '1234',
        user_id: '12345'
    },
    id: '59e9eaaaacb3ad0aaaedaaaa',
    userId: 12345,
    uuid: 'aaaaaaaa-de42-5c4b-80ee-eeeeeeeeeeee',
    displayName: 'bruce_wayne',
    givenName: 'Bruce',
    familyName: 'Wayne',
    gender: 'withheld',
    photo: 'https://secure.gravatar.com/avatar/1234?s=200',
    tracking: true,
    userStatus: 'connected',
    clientAgreementAccepted: true,
    defaultAgreementAccepted: true,
    sp_id: 'some-jwt-token',
    sig: 'some-encrypted-value'
};

const mockFn = jest.fn().mockImplementation(mock);

const mock = async (url) => {
    const { pathname, searchParams: search } = new URL(url);
    const autologin = search.get('autologin');
    if (autologin === 'true') {
        return { ok: true, json: async () => mockHasSessionLoginRequired };
    }
    if (pathname === '/rpc/hasSession.js') { // hasSession
        if (autologin === '1') {
            return { ok: true, json: async () => mockHasSessionLoginRequired };
        } else if (autologin === '0') {
            return { ok: true, json: async () => mockHasSessionUserException };
        } else {
            return { ok: false };
        }
    }
    if (pathname === '/ajax/hasSession.js') { // SPiD
        return { ok: true, json: async () => mockSPiDOk };
    }
    return;
}

mockFn.mockImplementation(mock);

module.exports = mockFn;
