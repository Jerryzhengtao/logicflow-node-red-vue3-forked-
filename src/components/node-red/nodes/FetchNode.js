import { h } from "@logicflow/core";
import BaseNode from "./BaseNode";

class FetchNode extends BaseNode.view {
  getIcon() {
    const { width, height } = this.props.model;
    return h("image", {
      width: 80,
      height: 30,
      x: -width / 2 + 20,
      y: -height / 2,
      href: "images/fetch.svg",
    });
  }
}

class FetchNodeModel extends BaseNode.model {
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.fill = "rgb(231, 231, 174)";
    return style;
  }
}

export default {
  type: "fetch-node",
  model: FetchNodeModel,
  view: FetchNode,
};
