// 默认的集中工具栏位
export default {
  simple: [
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }, "link", "blockquote"]
  ],
  common: [
    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }],
    ["blockquote"],
    ["link", "image"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" }
    ],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }]
  ],
  article: [
    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }],
    ["blockquote"],
    ["link", "image", "video"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" }
    ],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ color: [] }, { background: [] }],
    [{ direction: "rtl" }],
    ["clean"]
  ],
  code: [
    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }],
    ["blockquote", "code-block"],
    ["link", "image", "video"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" }
    ],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ color: [] }, { background: [] }],
    [{ direction: "rtl" }],
    ["clean"]
  ],
  full: [
    [{ font: [] }],
    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }],
    ["blockquote", "code-block"],
    [{ script: "sub" }, { script: "super" }],
    ["link", "image", "video"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" }
    ],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ color: [] }, { background: [] }],
    [{ direction: "rtl" }],
    ["clean"]
  ]
};
