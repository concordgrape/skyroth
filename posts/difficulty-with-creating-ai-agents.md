---
title: 'The Difficulty with Creating AI Agents'
date: '11/25/25'
excerpt: 'Langchain and Mem0 are very important to create AI agents, if used correctly'
author: 'Sky Roth'
---

## Background

During the creation of Verbuu, I mainly focused on building the site around common words spoken in a specific language. However, during the past couple of months, I've been working on implementing AI to communicate with users and help them understand the language they're trying to learn. 

### The Initial Problem with AI APIs

AI is very powerful when you use it correctly, and very low quality when used incorrectly. 

When you originally build an AI agent, you'll find the main problem is the AI understanding the context of your application. Sure, you can give it a long prompt and explain how to reply to requests, but this prompt would need to be given to the AI for each response the user provides. 

Not only that, when I was implementing AI into Verbuu, I would say stuff like "My name is Sky". Then a couple of messages later, I wanted the AI to refer to me by my name. However, the AI was unable to remember this.

The only way to resolve this without additional frameworks is attaching the important information to the prompt. This leads to a longer and longer prompt for each message the user provides.

That's when I decided to implement my own AI tech stack.

### AI Tech Stack for Verbuu

Within the AI section of the Verbuu website, I use **LangChain** and **Mem0**. Both of these frameworks are very important for creating an AI agent.

LangChain allows you to create specific AI agents for a variety of purposes. In this case, I wanted my AI to act like a tutor, where I would give the AI a simple prompt with major keywords I want the tutor to focus on. In the background, using LangChain, I would have a much larger prompt to distinguish user preferences, specific use cases, and required responses. LangChain also monitors the context of the given messages. In this case, I'm passing in every message that was spoken in the chat room to LangChain. This AI agent then generates a message based upon the large prompt initially given and the required prompts that it should monitor. Splitting these prompts together and keeping some original requirements in memory cuts down on the overall input token count by nearly **60%**. 

Mem0 is also an important framework that is used throughout Verbuu. When teaching languages and a user starts off at zero understanding of the language, the AI shouldn't jump into basic sentences, as the user's understanding is completely or nearly zero. Mem0 is used to store "learned" words throughout the entire site. On the old version of Verbuu, I created a section where users can view an entire database of common words and set if this word should be reviewed or if it's "known". I've taken this into the new version and Mem0 stores all known words from the database and the lessons within the site. Using these known words, the Verbuu AI then understands what the user knows and doesn't know and creates basic sentences in X language for the user to learn more. It slowly pushes out more vocabulary for the user to push their knowledge. 

### Going Forward

As Verbuu continues to evolve, my main focus is shifting toward creating a truly adaptive learning experience, one that feels personal, consistent, and actually helpful—similar to a *real* tutor. With LangChain handling structured reasoning and Mem0 tracking what each learner already understands, the next step is refining how these systems work together.

I want Verbuu's AI tutor to feel less like a chatbot and more like a guide that grows with you. That means improving long-term memory, expanding the types of conversations the tutor can handle, and introducing more advanced scenarios as the learner progresses. It also means reducing unnecessary token usage, building smarter context strategies, and keeping response times fast even as the underlying system becomes more complex.