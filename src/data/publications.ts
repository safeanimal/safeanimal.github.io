import type { Publication } from "@common/index";

export const publications: Publication[] = [
  {
    title: "Hamiltonian-Guided Diffusion Fields for Variable-Length Rigid-Arm Trajectory Generation",
    authors: ["Guorui Sang", "Pedram Rooshenas"],
    venue: "ICLR 2026 · ReALM-GEN Workshop",
    year: 2026,
    type: "workshop",
    featured: true,
    abstract: "Combines diffusion probabilistic fields with Hamiltonian guidance for variable-length robotic trajectory generation.",
    paper: "https://openreview.net/forum?id=MJl3bBLMM3",
  },
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
    year: 2025,
    type: "conference",
    featured: true,
    abstract:
      "A consistency model for efficient singing voice synthesis. I co-developed the method and designed a quality scorer to select the denoising starting point.",
    website: "https://keylxiao.github.io/consinger",
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
    note: "Co-author and associate editor under the pen name Yuhang (宇航).",
    abstract:
      "Contributed to the data structures section, organizing core theories and concepts alongside 300 problems and solutions across approximately 170 pages.",
  },
  // Add more publications here
];
