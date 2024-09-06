import CrossPlatform from "../../pages/CrossPlatform.js";
describe('Mobile', () => {
    it('normal', () => {
        const Platform = new CrossPlatform();

        Platform.validateMobileNormal();
    });
    it('landscape', () => {
        const Platform = new CrossPlatform();

        Platform.validateMobileLandscape();
    });
})