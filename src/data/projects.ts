import type { Project } from "@common/index";

export const projects: Project[] = [
  {
    title:
      "Research on Robotic Arm Simulation Using Diffusion Probabilistic Fields",
    description: [
      "Applied diffusion probabilistic fields to the generation of robotic arm trajectories.",
      "Created energy terms in the sampling stage, and used Langevin dynamics to steer the generated trajectory towards physically plausible quaternions and velocities, further utilized a Hamiltonian Neural Network to guide the torques applied to each joint to ground-truth torques.",
      "Demonstrated possibility of accelerating robotic simulation through GPU-based generative models and the ability to flexibly extend the length of the generated trajectory.",
    ],
    tags: ["Robotics", "Diffusion Models", "Energy-based models"],
    featured: true,
    startDate: "2025-08",
    endDate: "present",
  },
  {
    title: "Research on Singing Voice Generation",
    description: [
      "Developed ConSinger, a consistency model-based singing voice synthesis system.",
      "Designed a novel scorer mechanism to identify optimal restoration points during training for efficient mel-spectrogram generation from music scores.",
      "Improved the generation quality (+1.16 MOS) at a 10% reduction in the generation speed.",
    ],
    tags: ["Singing Voice Synthesis", "Diffusion Models", "Consistency Models"],
    featured: true,
    github: "https://keylxiao.github.io/consinger",
    startDate: "2024-07",
    endDate: "2024-12",
  },
  {
    title: "Research on Pose Transfer Using Diffusion Models",
    description: [
      "Designed a three-branch U-Net structure that incorporates conditional image features effectively. ",
      "Created a self-designed mixed classifier-free guidance to stably control the strength of different conditions.",
      "Demonstrated faster convergence, reduced 10%-50% parameters than SOTA models back then, and achieved comparable SSIM and PSNR.",
    ],
    tags: ["Conditional Image Generation", "Diffusion Models"],
    featured: true,
    startDate: "2023-10",
    endDate: "2025-02",
  },
  // Add more projects here
];
