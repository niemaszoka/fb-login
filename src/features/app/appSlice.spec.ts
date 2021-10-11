import appReducer, {
  AppState,
  setFbSdkLoaded
} from './appSlice';

describe('app reducer', () => {
  const initialState: AppState = {
    isFbSdkLoaded: false
  };
  it('should handle initial state', () => {
    expect(appReducer(undefined, { type: 'unknown' })).toEqual({
      isFbSdkLoaded: false
    });
  });

  it('should handle setFbSdkLoaded', () => {
    const actual = appReducer(initialState, setFbSdkLoaded(true));
    expect(actual.isFbSdkLoaded).toEqual(true);
  });
});
