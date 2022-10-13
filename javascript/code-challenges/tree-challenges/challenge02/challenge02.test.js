'use strict';

const { Node, breadthFirstTraversal } = require('./challenge02.js');

describe('Testing challenge 02', () => {
    
   re
    test('it return true if the two trees are the same', () => {
        let p = new Node(1);
        p.left = new Node(2);
        p.right = new Node(3);
        let q = new Node(1);
        q.left = new Node(2);
        q.right = new Node(3);
        expect(breadthFirstTraversal(p, q)).toEqual(true);
    });

    
    test('it return false if the two trees are not the same', () => {
        let p = new Node(1);
        p.left = new Node(2);
        let q = new Node(1);
        q.right = new Node(2);
        expect(breadthFirstTraversal(p, q)).toEqual(false);
    });

 
    test('it return false if the two trees are not the same', () => {
        let p = new Node(1);
        p.left = new Node(2);
        p.right = new Node(1);
        let q = new Node(1);
        q.left = new Node(1);
        q.right = new Node(2);
        expect(breadthFirstTraversal(p, q)).toEqual(false);
    });

});