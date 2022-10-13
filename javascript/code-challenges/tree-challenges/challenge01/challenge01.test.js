// Write your test here
"use strict";

const { Node, Tree, createTree } = require('./challenge01.js');

describe('Testing challenges', () => {
    it('returns an array of the values in order', () => {
        let AutoCreate= createTree ([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])

        let root = new Node(3);
        let leftSubTree = new Node(9);
        let rightSubTree = new Node(20);
        let fifteen = new Node(15);
        let seven = new Node(7);
        
        root.left = leftSubTree;
        root.right = rightSubTree;
        rightSubTree.left = fifteen;
        rightSubTree.right = seven;
        let tree1 = new Tree(root);
        
        expect(tree1.preOrder()).toStrictEqual(AutoCreate.preOrder());
        expect(tree1.inOrder()).toStrictEqual(AutoCreate.inOrder());
    });
    it('returns array of the values in order ', () => {
        let root = new Node(-1);
        let AutoCreate= createTree ([-1], [-1])

        let tree1 = new Tree(root);
        expect(tree1.preOrder()).toStrictEqual(AutoCreate.preOrder());
        expect(tree1.inOrder()).toStrictEqual(AutoCreate.inOrder());
    });
})