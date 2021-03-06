// import * as fsExtra from 'fs';
// import { expect } from 'chai';
// import { getManifest, getBsConst } from './Manifest';
// import { createSandbox, SinonSandbox } from 'sinon';
// let sinon: SinonSandbox;

// describe('manifest support', () => {
//     beforeEach(() => {
//         sinon = createSandbox();
//     });
//     afterEach(() => {
//         sinon.restore();
//     });

//     describe('manifest parser', () => {
//         it.only('returns an empty map if manifest not found', async () => {
//             // sinon.stub(fsExtra, 'readFile').returns(<any>
//             //     Promise.reject(
//             //         new Error('File not found')
//             //     )
//             // );
//             sinon.stub(fsExtra, 'readFile').returns(<any>
//                 Promise.reject(
//                     new Error('File not found')
//                 )
//             );

//             return expect(await getManifest('/no/manifest/here')).to.eql(new Map());
//         });

//         it('rejects key-value pairs with no \'=\'', () => {
//             fs.readFile.mockImplementation((filename, encoding, cb) => cb(/* no error */ null, 'no_equal')
//             );

//             return expect(getManifest('/has/key/but/no/equal')).rejects.toThrowError(
//                 'No \'=\' detected'
//             );
//         });

//         it('ignores comments', () => {
//             fs.readFile.mockImplementation((filename, encoding, cb) => cb(/* no error */ null, '# this line is ignored!')
//             );

//             return expect(getManifest('/has/a/manifest')).resolves.to.eql(new Map());
//         });

//         it('ignores empty keys and values', () => {
//             fs.readFile.mockImplementation((filename, encoding, cb) => cb(/* no error */ null, ['  =lorem', 'ipsum=  '].join('\n'))
//             );

//             return expect(getManifest('/has/blank/keys/and/values')).resolves.to.eql(new Map());
//         });

//         it('trims whitespace from keys and values', () => {
//             fs.readFile.mockImplementation((filename, encoding, cb) => cb(/* no error */ null, '    key = value    ')
//             );

//             return expect(getManifest('/has/extra/whitespace')).resolves.to.eql(
//                 new Map([['key', 'value']])
//             );
//         });

//         it('parses key-value pairs', () => {
//             fs.readFile.mockImplementation((filename, encoding, cb) => cb(
//                 /* no error */ null,
//                 ['foo=bar=baz', 'lorem=true', 'five=5', 'six=6.000', 'version=1.2.3'].join('\n')
//             )
//             );

//             return expect(getManifest('/has/a/manifest')).resolves.to.eql(
//                 new Map([
//                     ['foo', 'bar=baz'],
//                     ['lorem', true],
//                     ['five', 5],
//                     ['six', 6],
//                     ['version', '1.2.3']
//                 ])
//             );
//         });
//     });

//     describe('bs_const parser', () => {
//         it('returns an empty map if \'bs_const\' isn\'t found', () => {
//             let manifest = new Map([['containsBsConst', false]]);
//             expect(getBsConst(manifest)).to.eql(new Map());
//         });

//         it('requires a string value for \'bs_const\' attributes', () => {
//             let manifest = new Map([['bs_const', 1.2345]]);
//             expect(() => getBsConst(manifest)).toThrowError('Invalid bs_const right-hand side');
//         });

//         it('ignores empty key-value pairs', () => {
//             let manifest = new Map([['bs_const', ';;;;']]);
//             expect(getBsConst(manifest)).to.eql(new Map());
//         });

//         it('rejects key-value pairs with no \'=\'', () => {
//             let manifest = new Map([['bs_const', 'i-have-no-equal']]);
//             expect(() => getBsConst(manifest)).toThrowError('No \'=\' detected');
//         });

//         it('trims whitespace from keys and values', () => {
//             let manifest = new Map([['bs_const', '   key   =  true  ']]);
//             expect(getBsConst(manifest)).to.eql(new Map([['key', true]]));
//         });

//         it('rejects non-boolean values', () => {
//             let manifest = new Map([['bs_const', 'string=word']]);

//             expect(() => getBsConst(manifest)).to.throw;
//         });

//         it('allows case-insensitive booleans', () => {
//             let manifest = new Map([['bs_const', 'foo=true;bar=FalSE']]);

//             expect(getBsConst(manifest)).to.eql(
//                 new Map([
//                     ['foo', true],
//                     ['bar', false]
//                 ])
//             );
//         });
//     });
// });
