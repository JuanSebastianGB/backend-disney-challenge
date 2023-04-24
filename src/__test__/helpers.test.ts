import { cleanFileName } from '../routes';

describe('cleanFileName', () => {
  it('test_filename_with_one_period', () => {
    const filename = 'example.txt';
    expect(cleanFileName(filename)).toEqual('example');
  });
  it('test_filename_with_multiple_periods', () => {
    const filename = 'example.test.txt';
    expect(cleanFileName(filename)).toEqual('example');
  });
  it('test_filename_with_no_period', () => {
    const filename = 'example';
    expect(cleanFileName(filename)).toEqual('example');
  });
  it('test_filename_with_only_period', () => {
    const filename = '.';
    expect(cleanFileName(filename)).toEqual('');
  });
  it('test_filename_with_no_characters_before_period', () => {
    const filename = '.txt';
    expect(cleanFileName(filename)).toEqual('');
  });
  it('test_filename_with_spaces', () => {
    const filename = 'example file.txt';
    expect(cleanFileName(filename)).toEqual('example file');
  });
});
