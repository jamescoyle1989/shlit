export abstract class FullWidthStrategy<T_VM> {
    
    private _viewModel: T_VM;
    get viewModel(): T_VM { return this._viewModel; }
    set viewModel(value: T_VM) { this._viewModel = value; }

    private _resizeObserver: ResizeObserver;

    private _callback: () => void;
    get callback(): () => void { return this._callback; }
    set callback(value: () => void) { this._callback = value; }
    
    constructor() {
        const myself = this;
        this._resizeObserver = new ResizeObserver(myself._onResize);
    }

    observe(element: any): void {
        this._resizeObserver.observe(element);
    }

    destroy(): void {
        this._resizeObserver.disconnect();
    }

    private _onResize = (entries: Array<ResizeObserverEntry>) => {
        for (const entry of entries)
            this.resize(entry);
        if (!!this._callback)
            this._callback();
    }

    abstract resize(entry: ResizeObserverEntry): void;
}