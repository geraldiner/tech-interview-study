/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let curr = head;
    if (head) {
        while (curr) {
            size++;
            curr = curr.next;
        }
    }
    console.log(size);
    let temp = head;
    let half = (size % 2 == 0) ? Math.round(size/2) + 1 : Math.round(size/2);
    for (let i = 1; i < half; i++) {
        temp = temp.next;
    }
    return temp;
};

/* Other Solutions */

// O(n), O(n)
var middleNode = function(head) {
    let A = [head];
    while (A[A.length - 1].next != null)
        A.push(A[A.length - 1].next);
    return A[Math.trunc(A.length / 2)];
};

// O(n), O(1)
var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};