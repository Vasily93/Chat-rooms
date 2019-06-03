import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile Component');

test('renders with full user props', assert => {
    // arrange
    const user = {
        displayName: 'Vasily Markov',
        photoURL: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg">
            <span>Vasily Markov</span>
            <button>Sign Out</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders with default avatar when no photoURL', assert => {
    // arrange
    const user = {
        displayName: 'Vasily Markov',
        photoURL: null
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="./assets/avatar.png">
            <span>Vasily Markov</span>
            <button>Sign Out</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders empty div when no user', assert => {
    // arrange
    const user = null;
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div></div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});