class VueBtnSource {
  constructor(quill, options) {
    // 通过source按钮来判断是否开启source标签
    const button = quill.container.parentNode.querySelector(".ql-source");
    if (button) {
      const theClass = this;
      quill.on("text-change", (delta, oldDelta, source) => {
        theClass.replaceSourceEditorContent(quill);
      });
      // 源码显示的textarea
      theClass.addDom(quill);
      // 工具按钮
      button.innerHTML = `<svg viewBox="0 0 22 22"><path d="m12.5 0 5 4.5v15.003h-16V0h11zM3 1.5v3.25l-1.497 1-.003 8 1.5 1v3.254L7.685 18l-.001 1.504H17.5V8.002L16 9.428l-.004-4.22-4.222-3.692L3 1.5z"></path><path d="M4.06 6.64a.75.75 0 0 1 .958 1.15l-.085.07L2.29 9.75l2.646 1.89c.302.216.4.62.232.951l-.058.095a.75.75 0 0 1-.951.232l-.095-.058-3.5-2.5V9.14l3.496-2.5zm4.194 6.22a.75.75 0 0 1-.958-1.149l.085-.07 2.643-1.89-2.646-1.89a.75.75 0 0 1-.232-.952l.058-.095a.75.75 0 0 1 .95-.232l.096.058 3.5 2.5v1.22l-3.496 2.5zm7.644-.836 2.122 2.122-5.825 5.809-2.125-.005.003-2.116zm2.539-1.847 1.414 1.414a.5.5 0 0 1 0 .707l-1.06 1.06-2.122-2.12 1.061-1.061a.5.5 0 0 1 .707 0z"></path></svg>`;
      button.onclick = function () {
        theClass.showSourceEditor(quill);
      };
    }
  }
  // 源码编辑框
  addDom(quill) {
    if (!quill.container.querySelector(".ql-qb-source")) {
      const txtArea = document.createElement("textarea");
      txtArea.style.cssText = `margin:0;position:absolute;top:0;bottom:0;left:0;right:0;border:none;background:rgb(249, 249, 249);box-sizing:none;font-size:13px;outline:none;padding:12px 15px;line-height:1.42;font-family:Consolas, Menlo, Monaco, "Courier New", monospace;`;

      const sourceContainer = quill.addContainer("ql-qb-source");
      sourceContainer.style.cssText = "display:none";
      sourceContainer.appendChild(txtArea);
    }
  }
  // 工具栏源码和编辑切换
  replaceSourceEditorContent(quill) {
    const quillEditor = quill.container.querySelector(".ql-editor");
    const sourceContainer = quill.container.querySelector(".ql-qb-source");
    const sourceEditor = sourceContainer.querySelector("textarea");
    sourceEditor.value = quillEditor.innerHTML;
  }
  // 添加html-dom，切换编辑和源码
  showSourceEditor(quill) {
    const quillEditor = quill.container.querySelector(".ql-editor");
    const sourceContainer = quill.container.querySelector(".ql-qb-source");
    const sourceEditor = sourceContainer.querySelector("textarea");
    if (sourceContainer.style.display === "none") {
      sourceContainer.style.display = "";
      sourceEditor.value = quillEditor.innerHTML;
    } else {
      sourceContainer.style.display = "none";
      quillEditor.innerHTML = sourceEditor.value;
    }
  }
}

window.VueBtnSource = VueBtnSource;
export default VueBtnSource;
export { VueBtnSource };
