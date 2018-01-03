import {Component, OnInit, Output, Input, EventEmitter,ContentChild} from '@angular/core';
import {TreeNode} from "./tree-type";

@Component({
  selector: 'npp-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input()
  public tree: TreeNode;
  @Input()
  public parent: number;

  @Input()tmp : any;
  @Output() nodeSelected = new EventEmitter();
  @ContentChild('nodeTemplate') nodeTemplate;
  constructor() { }
  ngOnInit() {
    if(this.tmp)
      this.nodeTemplate = this.tmp;
  }
  private onNodeSelected(node): void {
    this.nodeSelected.emit(node);
  }

  private onNodeClick(e: MouseEvent): void {
    if(this.tree.id== 9999){
      this.onNodeSelected(this.tree);
    }else{
    if(this.tree.children.length == 3 ){
      if(this.tree.children[0].id == 9999){
        this.onNodeSelected(this.tree);
      }
    }else if(this.tree.children.length == 4 ){
      if(this.tree.children[0].id == 9999){
        this.onNodeSelected(this.tree);
      }
    }else if(this.tree.children.length == 0 ){
      this.onNodeSelected(this.tree);
    }
    }
  }
  private clickNode(e: MouseEvent): void {
    this.onNodeSelected(this.tree);
  }
  getFoldingCss(){
    if(this.tree.children){
    if(!this.tree.children.length){
      return '';
    }else{
      if(this.tree.children.length == 3 ){
        if(this.tree.children[0].id == 9999){
          return '';
        }
        else return "fa fa-caret-"+ (this.tree.folding?'down':'right');
      }else if(this.tree.children.length == 4 ){
        if(this.tree.children[3].id == 9999){
          return '';
        } else return "fa fa-caret-"+ (this.tree.folding?'down':'right');
      } else if(this.tree.children.length == 5 ){
        if(this.tree.children[4].id == 9999){
          return '';
        } else return "fa fa-caret-"+ (this.tree.folding?'down':'right');
      }  return "fa fa-caret-"+ (this.tree.folding?'down':'right');
    }
    }else return '';
  }
}
