<script>
import { ref } from "vue";
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import NodeRedExtension from "./node-red/index";
import "./node-red/style.css";

export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
  mounted() {
    this.lf = new LogicFlow({
      container: this.$refs.container,
      grid: {
        visible: true,
        type: "mesh",
        size: 10,
        config: {
          color: "#eeeeee",
        },
      },
      adjustEdge: false,
      hoverOutline: false,
      edgeSelectedOutline: false,
      keyboard: {
        enabled: true,
      },
      // keyboard: true,
      plugins: [NodeRedExtension],
    });
    this.lf.render({
      nodes: [
        {
          id: "node_1",
          type: "start-node",
          x: 220,
          y: 200,
          text: "start",
        },
        {
          id: "node_2",
          type: "fetch-node",
          x: 420,
          y: 200,
          text: "fetch data",
        },
        {
          id: "node_3",
          type: "function-node",
          x: 620,
          y: 200,
          text: "function",
        },
        {
          id: "node_4",
          type: "delay-node",
          x: 420,
          y: 300,
          text: "function",
        },
        {
          id: "node_5",
          type: "switch-node",
          x: 820,
          y: 200,
          text: "switch",
        },
        {
          id: "node_6",
          type: "function-node",
          x: 1020,
          y: 200,
          text: "function",
        },
        {
          id: "node_7",
          type: "function-node",
          x: 1020,
          y: 300,
          text: "function",
        },
        // {
        //   type: "vue-html",
        //   x: 300,
        //   y: 100,
        //   text: "2",
        //   properties: {
        //     t: 3,
        //   },
        // },
      ],
      edges: [
        {
          type: "flow-link",
          sourceNodeId: "node_1",
          targetNodeId: "node_2",
        },
        {
          type: "flow-link",
          sourceNodeId: "node_2",
          targetNodeId: "node_3",
        },
        {
          type: "flow-link",
          sourceNodeId: "node_3",
          startPoint: {
            x: 680,
            y: 200,
          },
          targetNodeId: "node_4",
        },
        {
          type: "flow-link",
          sourceNodeId: "node_4",
          startPoint: {
            x: 360,
            y: 300,
          },
          targetNodeId: "node_2",
        },
        {
          type: "flow-link",
          sourceNodeId: "node_3",
          targetNodeId: "node_5",
        },
        {
          type: "flow-link",
          sourceNodeId: "node_5",
          targetNodeId: "node_6",
        },
        {
          type: "flow-link",
          sourceNodeId: "node_5",
          targetNodeId: "node_7",
        },
      ],
    });
    this.lf.on("node-red:start", () => {
      // todo: 让流程跑起来
      console.log("我要开始执行流程了");
    });
  },
};
</script>

<template>
  <div class="flow-chart">
    <div ref="container" class="container"></div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.flow-chart {
  position: relative;
  width: 100%;
  height: 100%;
}

.flow-chart-palette {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
