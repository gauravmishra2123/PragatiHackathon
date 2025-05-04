# model_training.py

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
print("Loading dataset...")
df = pd.read_csv("dataset.csv")  # Placeholder dataset
X = df.drop("target", axis=1)
y = df["target"]

# Split the data
print("Splitting data into train and test sets...")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train model
print("Training RandomForest model...")
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model
print("Saving model to model.pkl...")
joblib.dump(model, "model.pkl")

print("Model training complete.")
