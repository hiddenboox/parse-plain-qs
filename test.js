import test from 'ava';
import parseURI from './';

test('encodedURI', t => {
  const hash = `${encodeURIComponent('fo@fa')}=bar&bar=${encodeURIComponent('blab@gmail.com')}`;
  const expected = {
    'fo@fa': 'bar',
    bar: 'blab@gmail.com',
  };
  t.deepEqual(parseURI(hash), expected)
});

test('plain strings', t => {
  const hash = 'foo=bar&bar=foo';
  const expected = {
    foo: 'bar',
    bar: 'foo',
  };

  t.deepEqual(parseURI(hash), expected);
});

test('starts with question mark or hash', t => {
  const hash = '?foo=bar&bar=foo';
  const search = '#foo=bar&bar=foo';
  const expected = {
    foo: 'bar',
    bar: 'foo',
  };

  t.deepEqual(parseURI(search), expected);
  t.deepEqual(parseURI(hash), expected);
});
