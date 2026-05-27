from transformers import pipeline

summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn"
)

print(
    summarizer(
        "Artificial Intelligence is transforming the world rapidly.",
        max_length=20,
        min_length=5
    )
)