import {escapeSelector} from './util';

it('should escape dots', () => {
  expect(escapeSelector('.foo')).toEqual('\\.foo');
});

it('should escape id hashes', () => {
  expect(escapeSelector('#foo')).toEqual('\\#foo');
});

it('should replace space with dash', () => {
  expect(escapeSelector('ul li')).toEqual('ul-li');
});

it('should replace multiple spaces with single dash', () => {
  expect(escapeSelector('ul  li')).toEqual('ul-li');
  expect(escapeSelector('ul li a')).toEqual('ul-li-a');
});

it('should escape descendent combinator', () => {
  expect(escapeSelector('#foo > .bar')).toEqual('\\#foo-\\>-\\.bar');
});

it('should escape sibling combinators', () => {
  expect(escapeSelector('.foo + .bar')).toEqual('\\.foo-\\+-\\.bar');
  expect(escapeSelector('.foo ~ .bar')).toEqual('\\.foo-\\~-\\.bar');
});
