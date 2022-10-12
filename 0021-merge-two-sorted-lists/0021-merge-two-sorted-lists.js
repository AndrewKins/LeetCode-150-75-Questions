/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
P
    -Merge the two sorted linked lists
E
    -Input: list1 = [1,2,4], list2 = [1,3,4]
    -Output: [1,1,2,3,4,4]
    Dummy Node = 0
            First check will be  Lists [1,1]
                Dummy Node = 1
            Second Check will be Lists 
D
    LinkedLists
A
    -Initialize a dummy node
    -Initialze a variable current to keep track of the connections 
        ---Establish a connection with the Dummy Node---
            -While there are nodes in a linked list
            -Compare the values of the head of each list node
            -Connect the dummy node to the head of the lesser value (list1 or 2)
            -Return the head of the next values
        
        ---Now the actual values of the linked lists (list 1 && list2)
            -Check if list1 and list2 is not null
                -Check each value of each head node (list1 and list2)
                    -if list1 value is less than list2 
                        -current.next = list1
                        -list2 = list1.next // moves to the next node
                    -Else
                        current.next = list2
                        list2 = list2.next //moves to next node
        ---Establish a connection with the remaining values---
            -if list1 is null and list2 has values
                current.next = list2
            else if
                -if list2 is null and list1 has values
                    current.next = list1
        --Return the head node of the merged linked list--
            Return Dummy.next
C
*/
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(null)
    let current = dummyNode
    
        while(list1 !== null && list2 !== null){
            if(list1.val <= list2.val){
                current.next = list1
                list1 = list1.next // moves to the next node
            } else {
                current.next = list2
                list2 = list2.next //moves to the next node
            }
                current = current.next;
        }
           if (list1 === null) { current.next = list2; }
            if (list2 === null) { current.next = list1; }
    return dummyNode.next;
    
};