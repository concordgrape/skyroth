---
title: 'Creating Verbuu - Determining Common Words'
date: '11/24/25'
excerpt: 'The easiest way to learn languages is by learning the most common words first, duh'
author: 'Sky Roth'
---

## Background

During my own language learning process, I've subscribed to many sites and services that offer easy and innovative ways to learn. However, I didn't find any of these useful. I kept getting stuck in grammar lessons and learning useless phrases such as *"The girl and the dog had fun outside"*. In reality, no one speaks like this.

I wanted to learn a language by **SPEAKING**, not memorizing abnormal phrases and sentences. How could I achieve this? 

## Creation of Verbuu

That's when I realized I should just start speaking the language, cold turkey. Sure, I don't understand the grammar aspect of it, but that's how I'll learn. I'll teach myself common words and use regular English grammatical structures.

When babies learn languages, they don't practice the grammar first, they speak it. They repeat words their parents are speaking, why are we any different? Sure, you'll make mistakes, but that's the point. I started writing down random words from my German classes on flashcards and memorizing the translations. I soon started to think that there must be a better way to automate this.

Going on top of that, there are about 130,000 words in the English language. When we speak to colleagues or our family on a day-to-day basis, we don't use all 130,000 words. In fact, we only use about 3,000. I continued to think, when learning languages, we tend to focus on all the words and not the most common.

That's when I came up with the idea of Verbuu. I started grabbing as many words as I could, in this case, German. I found the most popular TV shows and movies in Germany and parsed through all of the subtitles using a simple Python script. In the end, I had a database with about 1,000,000 sentences and about 8,000,000 words. Next, I parsed all of the words to analyze the frequencies of each word and how many times it appears. This turned the bulk data into a database with about 100,000 words. I then cut it to the top 10,000 and created Verbuu.

## Features of Verbuu

Verbuu is built around practical, real-world language learning. Instead of forcing you through rigid grammar exercises, it focuses on the words and phrases people actually use every day.

### Common Words Database

At the core of Verbuu is a database of the most frequently used words in each language. By focusing on the top 3,000-10,000 words, you can understand about 80-90% of everyday conversations. Each word includes translations, example sentences, and context for how it's commonly used. You can mark words as "known" or flag them for review, allowing the platform to adapt to your current skill level.

### AI Language Tutor

Verbuu's AI tutor is powered by LangChain and Mem0, creating a personalized learning experience that adapts to what you already know. The AI remembers your vocabulary progress and creates custom sentences and conversations using only the words you've learned. As you advance, it gradually introduces new vocabulary in context, mimicking how real tutors adjust their teaching. You can have natural conversations with the AI, practice specific scenarios, and get instant feedback on your language use.

### Flashcards

Verbuu offers smart flashcards that prioritize the most common words in your target language. Unlike traditional flashcards that use random vocabulary, these focus on frequency-based learning. You can review words you've marked for practice, and the system automatically adjusts based on your progress. Flashcards include translations, pronunciation guides, and example sentences to reinforce context.

### Quizzes

Test your knowledge with interactive quizzes designed around real-world usage. Quizzes adapt to your skill level, focusing on words you're currently learning and gradually introducing new ones. They include multiple formats like translation exercises, fill-in-the-blank sentences, and listening comprehension. Your performance helps Verbuu understand which words you've mastered and which need more practice.

### Lessons

Structured lessons guide you through vocabulary and phrases organized by frequency and practical use. Each lesson builds on what you've already learned, ensuring you're never overwhelmed with unfamiliar words. Lessons incorporate different learning methods including reading, listening, and interactive exercises to reinforce retention.

Verbuu isn't about memorizing verb conjugations or abstract grammar rules. It's about learning to speak naturally, just like you learned your first language, by focusing on the words that matter most and practicing them in real conversations.