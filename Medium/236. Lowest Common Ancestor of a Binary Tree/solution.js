var lowestCommonAncestor = function(root, p, q) {
    let lowestCommonAncestor = null;
    
    function dfs(node, p, q) {
        if(!node) return 0;
        
        let left = dfs(node.left, p, q) ? 1 : 0;
        let right = dfs(node.right, p, q) ? 1 : 0;
        let mid = (node === p || node === q) ? 1 : 0;
        
        if(left + right + mid >= 2) lowestCommonAncestor = node;
        
        return (left + right + mid > 0);
    }
    dfs(root, p, q);
    return lowestCommonAncestor;
};