
export interface TreeNode {
  id : any
  value: string | any;
  children?: Array<TreeNode>
  parent?: any;
  folding?:boolean;
  data ? : any
}

