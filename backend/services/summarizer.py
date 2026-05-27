from transformers import pipeline

summarizer_pipeline = pipeline(
    "summarization",
    model="facebook/bart-large-cnn"
)

def summarize_text(text):
    result = summarizer_pipeline(
        text,
        max_length=80,
        min_length=20,
        do_sample=False
    )

    return result[0]["summary_text"]