from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.sentiment import analyze_sentiment
from services.summarizer import summarize_text
from services.generator import generate_text

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "AI Model Serving API"}

@app.post("/sentiment")
def sentiment(data: TextRequest):
    return analyze_sentiment(data.text)

@app.post("/summarize")
def summarize(data: TextRequest):
    summary = summarize_text(data.text)
    return {"summary": summary}

@app.post("/generate")
def generate(data: TextRequest):
    generated = generate_text(data.text)
    return {"generated_text": generated}