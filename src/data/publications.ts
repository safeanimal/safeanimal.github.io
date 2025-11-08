import type { Publication } from "@common/index";

export const publications: Publication[] = [
  {
    title:
      "ConSinger: Efficient High-Fidelity Singing Voice Generation with Minimal Steps",
    authors: ["Yulin Song", "Guorui Sang", "Jing Yu", "Chuangbai Xiao"],
    authorAnnotations: {
      "Yulin Song": "*",
      "Guorui Sang": "*",
    },
    authorNote: "* Equal contribution",
    venue:
      "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
    year: 2024,
    type: "conference",
    featured: true,
    abstract:
      "We present a novel approach to solving X problem in machine learning...",
    paper: "https://keylxiao.github.io/consinger",
    arxiv: "https://arxiv.org/abs/2410.15342",
  },
  {
    title:
      "《计算机考研精炼 1000 题》（Computer Science Graduate Examination: 1000 Exercises）",
    authors: ["睿德", "非晚", "宇航", "栗子"],
    venue: "Tsinghua University Press",
    year: 2023,
    type: "book",
    website: "https://wqbook.wqxuetang.com/book/3248109",
    yourPenName: "宇航",
    note: "Published under the pen name '宇航'",
  },
  // Add more publications here
];
