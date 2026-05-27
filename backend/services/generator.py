from transformers import pipeline

generator_pipeline = pipeline(
    "text-generation",
    model="gpt2"
)

def generate_text(prompt):
    result = generator_pipeline(
        prompt,
        max_length=100,
        num_return_sequences=1
    )

    return result[0]["generated_text"]