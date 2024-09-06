import CrossPlatform from "../pages/CrossPlatform.js";

describe('Web', () => {
  it('should be publicly accessible', () => {

    const Platform = new CrossPlatform();

    Platform.validateWeb()
  });
})