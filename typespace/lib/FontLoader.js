class FontLoader {
    constructor() {
        this.loadedFonts = {};
    }
    loadFont(font) {
        const $sheets = $('#sheets');
        let family = font['family'];
        if(!this.loadedFonts[family] && !font['systemFont']) {
            $sheets.after(fontLinkTemplate({
                family: Handlebars.escapeExpression(family)
            }));
            this.loadedFonts[family] = true;
        }
    }
}
