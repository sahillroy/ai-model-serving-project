# AI Model Serving Platform

A full-stack AI application built using React, FastAPI, and Hugging Face Transformers.

## Features

- Sentiment Analysis
- Text Summarization
- AI Text Generation
- FastAPI Backend
- React Frontend

## Tech Stack

- React
- Vite
- FastAPI
- Hugging Face Transformers
- PyTorch

## Backend & Frontend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload

#################################################

cd frontend

npm install

npm run dev

pip install -r requirements.txt

uvicorn app:app --reload
