function inorderTraversal(root) {
  if (root !== null) {
    this.inorderTraversal(root.left);
    console.log(root.data);
    this.inorderTraversal(root.right);
  }
}
