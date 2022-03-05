interface Document {
    classSelector(classNames: string): Element | null
}

interface HTMLCollectionBase {
    isEmpty(): boolean

    isNotEmpty(): boolean
}

interface NodeList {
    isEmpty(): boolean

    isNotEmpty(): boolean
}

interface Array<T> {
    isEmpty(): boolean

    isNotEmpty(): boolean
}

interface Element {
    classSelector(classNames: string): Element | null
}

interface String {
    matchStartWith(substring: string): string | null

    isBlank(): boolean

    isNotBlank(): boolean
}

// Document
Object.defineProperty(Document.prototype, 'classSelector', {
    value: function (this: Document, classNames: string): Element | null {
        return this.getElementsByClassName(classNames)[0]
    },
})

// HTMLCollection
Object.defineProperty(HTMLCollection.prototype, 'isEmpty', {
    value: function (this: HTMLCollectionOf<Element>): boolean {
        return this.length == 0
    },
})

Object.defineProperty(HTMLCollection.prototype, 'isNotEmpty', {
    value: function (this: HTMLCollectionOf<Element>): boolean {
        return this.length > 0
    },
})

// NodeList
Object.defineProperty(NodeList.prototype, 'isEmpty', {
    value: function (this: NodeListOf<Node>): boolean {
        return this.length == 0
    },
})

Object.defineProperty(NodeList.prototype, 'isNotEmpty', {
    value: function (this: NodeListOf<Node>): boolean {
        return this.length > 0
    },
})

// Array
Object.defineProperty(Array.prototype, 'isEmpty', {
    value: function <T>(this: Array<T>): boolean {
        return this.length == 0
    },
})

Object.defineProperty(Array.prototype, 'isNotEmpty', {
    value: function <T>(this: Array<T>): boolean {
        return this.length > 0
    },
})

// Element
Object.defineProperty(Element.prototype, 'classSelector', {
    value: function (classNames: string): Element {
        return this.getElementsByClassName(classNames)[0]
    },
})

// String
Object.defineProperty(String.prototype, 'matchStartWith', {
    value(substring: string): string | null {
        return this.match(new RegExp(`(?<=^${substring}).+`))![0]
    },
})

Object.defineProperty(String.prototype, 'isBlank', {
    value: function (this: string): boolean {
        return this.replace(/\s/g, '').length == 0
    },
})

Object.defineProperty(String.prototype, 'isNotBlank', {
    value: function (this: string): boolean {
        return this.replace(/\s/g, '').length > 0
    },
})