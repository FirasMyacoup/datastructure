// Write here the code challenge solution
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(p, q) {
    let pQueue = [p];
    let qQueue = [q];

    while (pQueue.length > 0 && qQueue.length > 0) {
        let pCurrent = pQueue.shift();
        let qCurrent = qQueue.shift();
        if (pCurrent.value !== qCurrent.value) {
            return false;
        }
        if (pCurrent.left && qCurrent.left) {
            pQueue.push(pCurrent.left);
            qQueue.push(qCurrent.left);
        } else if (pCurrent.left || qCurrent.left) {
            return false;
        }
        if (pCurrent.right && qCurrent.right) {
            pQueue.push(pCurrent.right);
            qQueue.push(qCurrent.right);
        } else if (pCurrent.right || qCurrent.right) {
            return false;
        }
    }
    
    return true;
}

module.exports = { Node, breadthFirstTraversal };
