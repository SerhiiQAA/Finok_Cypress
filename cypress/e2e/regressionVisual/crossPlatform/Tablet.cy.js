import CrossPlatform from "../../pages/CrossPlatform.js";
describe('Tablet', () => {
    it('normal', () => {
        const Platform = new CrossPlatform();

        Platform.validateTabletNormal();
    });
    it('landscape', () => {
       const Platform = new CrossPlatform();

       Platform.validateTabletLandscape();
    });
})