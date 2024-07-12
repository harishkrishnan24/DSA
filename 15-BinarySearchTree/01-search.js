function searchBST(root, target) {
  if (!root) return false;
  if (root.data === target) return true;
  if (root.data > target) return this.searchBST(root.left, target);
  if (root.data < target) return this.searchBST(root.right, target);
}
