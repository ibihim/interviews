'use strict';

/*
 *
 * https://www.hackerrank.com/challenges/ctci-contacts/problem
 *
 * Does not timeout :D
 * Recursion fails, as TCO is not part of Node, without harmony parameter.
 *
 */

const makeTries = () => {
    const Node = (() => {
        function Node() {
            this.value = 0;
            this.nodes = {}
        }

        Node.prototype.incrementValue = function () {
            this.value++;

            return this;
        };

        Node.prototype.getValue = function () {
            return this.value;
        };

        Node.prototype.getNodes = function () {
            return this.nodes;
        };

        Node.prototype.getNode = function (key) {
            return this.getNodes()[key];
        };

        Node.prototype.addNode = function (key) {
            if (!this.getNode(key)) {
                this.getNodes()[key] = Node.of();
            }

            return this.getNode(key).incrementValue();
        };

        Node.of = function () {
            return new Node();
        };

        return Node;
    })();

    const tree = Node.of();

    const addNodes = (nodePath) => nodePath.split('').reduce((node, key) => node.addNode(key), tree);

    const findNodeCountFor = (nodePathConcat) => {
        const nodePath = nodePathConcat.split('');

        let currentNode = tree;

        for (let i = 0, nodePathLength = nodePath.length; i < nodePathLength; i++) {
            const nextStep = nodePath[i];

            currentNode = currentNode.getNode(nextStep);

            if (!currentNode) {
                currentNode = Node.of();

                break;
            }
        }

        return currentNode.getValue();
    };

    return { findNodeCountFor, addNodes };
};

const contactsBook = makeTries();

contactsBook.addNodes('Dave');
contactsBook.addNodes('David');

console.log( contactsBook.findNodeCountFor('Dav') === 2 );
