//O(nlogn) solution that combines all of the lists into one list, sorts
//them, then creates a new list with given sorted values.

var mergeKLists = function(lists) {
    let arr = []
    
    for(let list of lists) {
        while(list) {
            arr.push(list.val)
            list = list.next
        }
        
    }
    
    //Sort them from greatest to least to pop out later
    arr.sort((a,b) => {
        return b-a
    })
    
    let newNode = new ListNode(-1)
    let temp = newNode
    
    
    while(arr.length) {
        let next = new ListNode(arr.pop())
        temp.next = next
        temp = next
    }
    
    return newNode.next
};