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
    -Merge two linked lists
E
D
    Linked lists
A
    -Initialize a dummy node
    -Initialize a variable current to keep track of a connection - Dummy
    -While there are nodes in a linked list
    -Compare the values of the head of each list node
    -We want to return the head node of the merged list 
        -Compare the head nodes of the next values 
            -Connect dummy node to the head node of the lesser value
    -Now to move on to the actual values of the linked list
        -While there are node in the linked list
            -
        
C
*/
var mergeTwoLists = function(list1, list2) {
    let Dummy = new ListNode(0)
    let current = Dummy
    while(list1 !== null && list2 !== null){
    if(list1.val < list2.val) current.next = list1;
    else Dummy.next = list2; break
    }

    
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            current.next = list1
            list1 = list1.next //moves to the next node
        } else {
            current.next = list2
            list2 = list2.next //moves to the next node
        }
            current = current.next;
        }
        if(list1 == null && list2!=null){
            current.next = list2;
        }
        else if(list1!=null && list2==null){
            current.next = list1;
        }
        return Dummy.next;  
};