---
pubDate: "Nov 27 2025"
title: "Local LLM for Low-RAM Laptops"
description: "3 lightweight, open-source LLMs that actually run on 8–16 GB RAM—no GPU needed"
image: "~/assets/images/local-ai-llm.jpg"
author: "gigamaster"
category: "tutorial"
tags: [app, llm, digital nomad]
---

You don’t need 32 GB of RAM to run a useful local AI.  
If your laptop has **8–16 GB RAM** and no dedicated GPU, stick to models under **3B parameters**—ideally **1–2B**. Big models (7B+) will crawl or crash.  

Here’s the shortlist for 2025:

---

#### ✅ **Gemma 3 (1B)** *Best for ultra-light setups*  
- Runs on **8 GB RAM** (even less with 4-bit quantization)  
- **128K context** great for long docs  
- Text-only, but fluent, fast, and open (Google, Apache 2.0)  
→ Use if: You need basic Q&A, summarization, or coding help on an older machine.

#### ✅ **SmolLM2 (1.7B)** *Best quality in small size*  
- Needs ~12–16 GB RAM  
- Beats most 1–2B models in reasoning and code  
- Open weights, fine-tuned for on-device use  
→ Use if: You want the smartest small model that still runs on CPU.

#### ✅ **DeepSeek R1 (1.5B)** *Best for math & logic*  
- Built for problem-solving (outperforms GPT-4o on AIME math)  
- ~16 GB RAM recommended  
- Distilled from Qwen—lean but sharp  
→ Use if: You’re coding, debugging, or solving technical problems offline.

---

### 7B Models: Possible, but with Limits

- **Llama 3.1 8B**, **GLM-4 9B**, **Qwen2.5-VL 7B**  
  → These might be heavy for low-RAM laptops. Save them for machines with more than 16 GB or a GPU.

Some quantized 7B models (like Mistral 7B, Llama-3.2 3B, or Phi-3-mini 3.8B) can run on 16 GB RAM using LM Studio or Ollama, if:

- You’re using 4-bit quantization (Q4 or lower)
- You close other apps (Chrome is a RAM vampire)
- You accept slower responses (1–3 words/sec on CPU)

→ Use 7B only if: You need slightly better reasoning and you’ve tested it on your exact setup.  

→ Stick to ≤3B if: You want predictable performance during travel, low battery, or multitasking.

---

### 🛠️ How to run them:  
1. Install **Ollama** or **LM Studio** (free, open, one-click setup)  
2. Search for the model name (e.g., `gemma3:1b`, `smollm2:1.7b-q4`)  
3. Run. No cloud. No API keys. No bills.

---

> **Local AI isn’t about power, it’s about freedom.**  
> Pick small. Run offline. Own your workflow.

[[Top]](#top)