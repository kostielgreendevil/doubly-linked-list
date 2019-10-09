const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        let currentNode = this._head,
            length = this.length,
            count = 0;

        if (index < 0 || index > length) {
            return false;
        }

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode.data;
    }

    insertAt(index, data) {
        let currentNode = this._head,
            length = this.length,
            count = 0,
            insertData = data;

        if (index < 0 || index > length) {
            return false;
        }

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        let node = new Node(insertData);

        node.next = currentNode;

        if (index === 0) {
            this._head = node;
        } else {
            node.prev = currentNode.prev;
            currentNode.prev.next = node;
            currentNode.prev = node;
        }

        
        this.length++;

        return this;

    }

    isEmpty() {
        return !(this.length);
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let currentNode = this._head;

        for (let i = 0; i <= index; i++) {
            if (this.length === 1 && index === 0) {
                this._head = null;
                this._tail = null;
                this.length = 0;
                return this;
            } else if (i === index) {
                currentNode.prev.next =  currentNode.next;
                currentNode.next.prev =  currentNode.prev;
                this.length--;
            } else {
                currentNode =  currentNode.next;
            }
        }
        return this;

    }


    reverse() {
        let currentNode = this._head,
            prev = null;
        while (currentNode) {
            let next = currentNode.next;
            currentNode.next = prev;
            currentNode.prev = next;
            prev = currentNode;
            currentNode = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let currentNode = this._head,
            count = 0,
            searchData = data;

        if (!this.length) {
            return false;
        }

        while (count < this.length) {
            if (currentNode.data === searchData) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }
        return -1;
    }
}


module.exports = LinkedList;