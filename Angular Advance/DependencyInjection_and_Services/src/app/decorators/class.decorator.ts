export function stickers(configuration: any) {
    return function (target: any) {
        target.prototype.stickers = configuration.stickers;
    }
}