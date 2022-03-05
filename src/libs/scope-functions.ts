interface Object {
    /**
     * Calls the specified function block with `this` value as its argument and returns its result
     * @param block - The function to be executed with `this` as argument
     * @returns `block`'s result
     */
    letIt<T, R>(this: T | null | undefined, block: (it: T) => R): R;

    /**
     * Calls the specified function block with `this` value as its receiver and returns `this` value
     * @param block - The function to be executed with `this` as context
     * @returns `this`
     */
    applyIt<T>(this: T | null | undefined, block: (this: T) => void): T;

    /**
     * Returns `this` value if it satisfies the given predicate or `undefined` if it doesn't
     * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
     * @returns `this` or `undefined`
     */
    takeIf<T>(this: T | null | undefined, predicate: (it: T) => boolean): T | undefined;

    /**
     * Returns `this` value if it does not satisfy the given predicate or `undefined` if it does
     * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
     * @returns `this` or `undefined`
     */
    takeUnless<T>(this: T | null | undefined, predicate: (it: T) => boolean): T | undefined;
}

interface String {
    /**
     * Calls the specified function block with `this` value as its argument and returns its result
     * @param block - The function to be executed with `this` as argument
     * @returns `block`'s result
     */
    letIt<R>(this: String | null | undefined, block: (it: string) => R): R;

    /**
     * Calls the specified function block with `this` value as its receiver and returns `this` value
     * @param block - The function to be executed with `this` as context
     * @returns `this`
     */
    applyIt(this: String | null | undefined, block: (this: string) => void): string;
}

interface Element {
    /**
     * Calls the specified function block with `this` value as its argument and returns its result
     * @param block - The function to be executed with `this` as argument
     * @returns `block`'s result
     */
    letIt<T, R>(this: T | null | undefined, block: (it: T) => R): R;

    /**
     * Calls the specified function block with `this` value as its argument and returns `this` value
     * @param block - The function to be executed with `this` as argument
     * @returns `this`
     */
    also<T>(this: T | null | undefined, block: (it: T) => void): T;

    /**
     * Calls the specified function block with `this` value as its receiver and returns its value
     * @param block - The function to be executed with `this` as context
     * @returns `block`'s result
     */

    runIt<T, R>(this: T | null | undefined, block: (this: T) => R): R;

    /**
     * Calls the specified function block with `this` value as its receiver and returns `this` value
     * @param block - The function to be executed with `this` as context
     * @returns `this`
     */
    applyIt<T>(this: T | null | undefined, block: (this: T) => void): T;

    /**
     * Returns `this` value if it satisfies the given predicate or `undefined` if it doesn't
     * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
     * @returns `this` or `undefined`
     */
    takeIf<T>(this: T | null | undefined, predicate: (it: T) => boolean): T | undefined;

    /**
     * Returns `this` value if it does not satisfy the given predicate or `undefined` if it does
     * @param predicate - The function to be executed with `this` as argument and returns a truthy or falsy value
     * @returns `this` or `undefined`
     */
    takeUnless<T>(this: T | null | undefined, predicate: (it: T) => boolean): T | undefined;
}


// Object
Object.defineProperty(Object.prototype, 'letIt', {
    value: function <T, R>(this: T, block: (it: T) => R): R {
        return block(this)
    },
})

Object.defineProperty(Object.prototype, 'applyIt', {
    value: function <T>(this: T, block: (this: T) => void): T {
        block.call(this)
        return this
    },
    configurable: true,
    writable: true,
})

Object.defineProperty(Object.prototype, 'takeIf', {
    value: function <T>(this: T, predicate: (it: T) => boolean): T | undefined {
        return predicate(this) ? this : undefined
    },
})

Object.defineProperty(Object.prototype, 'takeUnless', {
    value: function <T>(this: T, predicate: (it: T) => boolean): T | undefined {
        return predicate(this) ? undefined : this
    },
})

// String
Object.defineProperty(String.prototype, 'letIt', {
    value: function <R>(this: String, block: (it: string) => R): R {
        return block(this.valueOf())
    },
})

Object.defineProperty(String.prototype, 'applyIt', {
    value(this: String, block: (this: string) => void): string {
        block.call(this.valueOf())
        return this.valueOf()
    },
    configurable: true,
    writable: true,
})

// Element
Object.defineProperty(Element.prototype, 'letIt', {
    value: function <T, R>(this: T, block: (it: T) => R): R {
        return block(this)
    },
})

Object.defineProperty(Element.prototype, 'also', {
    value<T>(this: T, block: (it: T) => void): T {
        block(this)
        return this
    },
})

Object.defineProperty(Element.prototype, 'runIt', {
    value: function <T, R>(this: T, block: (this: T) => R): R {
        return block.call(this)
    },
})

Object.defineProperty(Element.prototype, 'applyIt', {
    value<T>(this: T, block: (this: T) => void): T {
        block.call(this)
        return this
    },
})

Object.defineProperty(Element.prototype, 'takeIf', {
    value<T>(this: T, predicate: (it: T) => boolean): T | undefined {
        return predicate(this) ? this : undefined
    },
})

Object.defineProperty(Element.prototype, 'takeUnless', {
    value<T>(this: T, predicate: (it: T) => boolean): T | undefined {
        return predicate(this) ? undefined : this
    },
})