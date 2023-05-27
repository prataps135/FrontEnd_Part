export function stickers(configuration: any) {
    return function (target: any) {
        target.prototype.stickers = configuration.stickers;
    }
}

export function HookLogger(configuration?: any) {
    return function (target: any) {

        const componentName = target.name;
        const defaultHooks: string[] = [
            'ngOnInit',
            'ngOnChanges',
            'ngDoCheck',
            'ngAfterContectInit',
            'ngAfterContectCheck',
            'ngAfterViewInit',
            'ngAfterViewCheck',
            'ngOnDestory'
        ];

        let hooksToBeLogged = (configuration && configuration.hooks) || defaultHooks;

        hooksToBeLogged.forEach((hookToBeLogged: any) => {
            const original = target.prototype[hookToBeLogged];
            target.prototype[hookToBeLogged] = function (...args: any) {
                console.log(`Component Name : ${componentName} | Hook Name : ${hookToBeLogged} | `, ...args);
                original && original.apply(this, args);
            }
        });
    }
}


export function Readonly(value: any) {
    return function (target: any, key: any) {
        Object.defineProperty(target, key, {
            set: () => target.key = value,
            get: () => value,
            configurable: false
        })
    }
}