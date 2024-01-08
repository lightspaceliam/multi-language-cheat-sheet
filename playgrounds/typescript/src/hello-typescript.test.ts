
import { hello } from './hello-typescript';

describe('test', () => {
  it('should', () => {
    const response = hello();

    expect(response).toEqual('Hello TypeScript');
  })
});