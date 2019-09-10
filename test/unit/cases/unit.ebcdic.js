const tap = require('tap');
const codec = require('../../../index')();

const ascii = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
const ebcdic = '405A7F7B5B6C507D4D5D5C4E6B604B61F0F1F2F3F4F5F6F7F8F97A5E4C7E6E6F7CC1C2C3C4C5C6C7C8C9D1D2D3D4D5D6D7D8D9E2E3E4E5E6E7E8E9ADE0BD5F6D79818283848586878889919293949596979899A2A3A4A5A6A7A8A9C04FD0A1';

tap.test('ebcdic encode / decode', t => {
    t.same(codec.encode(), '', 'No arguments for encode returns empty string');
    t.same(codec.decode(), '', 'No arguments for decode returns empty string');
    t.same(codec.encode({}), '', 'Invalid arguments /Object/ for encode returns empty string');
    t.same(codec.decode({}), '', 'Invalid arguments /Object/ for decode returns empty string');
    t.same(codec.encode([]), '', 'Invalid arguments /Array/ for encode returns empty string');
    t.same(codec.decode([]), '', 'Invalid arguments /Array/ for decode returns empty string');
    t.same(codec.encode(Buffer.from('')), '', 'Invalid arguments /Buffer/ for encode returns empty string');
    t.same(codec.decode(Buffer.from('')), '', 'Invalid arguments /Buffer/ for decode returns empty string');

    t.same(codec.decode('PPAAeR'), '', 'Invalid arguments /non hex string/ for decode returns empty string');

    t.same(codec.encode(ascii), ebcdic);
    t.same(codec.decode(ebcdic), ascii);

    t.end();
});
