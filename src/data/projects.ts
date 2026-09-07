import type { Project } from "@common/index";

export const projects: Project[] = [
  {
    "title": "Recursive Function-Space Transformer",
    "status": "Manuscript in preparation",
    "description": [
      "Proposed Recursive FST for operator learning to preserve local detail and capture long-range dependencies with a compact latent representation.",
      "Designed input-dependent spatial anchors and recursive attention over a continuous feature field. The model supports queries at arbitrary coordinates.",
      "Lead the core method, model implementation, and experimental design. Evaluate the framework on PDE prediction and image classification."
    ],
    "tags": [
      "Neural Operators",
      "Transformers",
      "Continuous Representations"
    ],
    "featured": true
  },
  {
    "title": "Hamiltonian-Guided Trajectory Generation",
    "status": "Extended manuscript in preparation",
    "description": [
      "Proposed Hamiltonian-guided diffusion to generate physically plausible robotic trajectories across variable horizons without a simulator at inference.",
      "Formulated an energy function from Hamiltonian residuals for guided sampling. Gradient guidance and importance resampling use this energy to steer the diffusion denoising process.",
      "Lead method design, implementation, and evaluation in MuJoCo. This ongoing project extends our ICLR 2026 ReALM-GEN Workshop paper."
    ],
    "tags": [
      "Diffusion Models",
      "Hamiltonian Dynamics",
      "Guided Sampling",
      "Robotics"
    ],
    "paper": "https://openreview.net/forum?id=MJl3bBLMM3",
    "featured": true
  },
  {
    "title": "ConSinger",
    "status": "ICASSP 2025 · Equal contribution",
    "description": [
      "Co-developed a consistency model for efficient singing voice synthesis. Designed a quality scorer to select the denoising starting point.",
      "Reduced inference time by 65% versus DiffSinger on PopCS with comparable perceptual quality (MOS: 3.88 vs. 3.81)."
    ],
    "tags": [
      "Consistency Models",
      "Audio Generation",
      "Singing Voice Synthesis"
    ],
    "demo": "https://keylxiao.github.io/consinger",
    "paper": "https://arxiv.org/abs/2410.15342",
    "featured": true,
    "startDate": "2024-07",
    "endDate": "2024-12"
  }
];
