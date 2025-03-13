import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = () => {
  const [gameLoaded, setGameLoaded] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [codeValue, setCodeValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Define the level data with challenges and solutions
  const levelData = {
    1: {
      title: "Guess the Number",
      description: "Create a game that generates a random number between 1 and 10 and lets the user guess it.",
      initialCode: "",
      solution: `import random

# Secret number between 1 and 10
secret_number = random.randint(1, 10)
guess_count = 0

def check_guess():
    global guess_count
    user_input = document["userInput"].value
    result = document["gameResult"]
    
    try:
        guess = int(user_input)
        guess_count += 1
        if guess == secret_number:
            result.text = f"🎉 Correct! You guessed it in {guess_count} tries!"
        elif guess < secret_number:
            result.text = "⬆️ Too low! Try again."
        else:
            result.text = "⬇️ Too high! Try again."
    except ValueError:
        result.text = "❌ Please enter a valid number."

# Bind function to the button click
from browser import document
document["checkButton"].bind("click", lambda evt: check_guess())`,
      challenge: "Write code for a number guessing game that keeps track of how many guesses the player has made."
    },
    2: {
      title: "Simple Calculator",
      description: "Create a calculator that can add, subtract, multiply, divide, and find remainders.",
      initialCode: "",
      solution: `from browser import document

def calculate():
    try:
        num1 = float(document["num1"].value)
        num2 = float(document["num2"].value)
        operation = document["operation"].value
        result = document["calcResult"]
        
        if operation == "add":
            result.text = f"Result: {num1 + num2}"
        elif operation == "subtract":
            result.text = f"Result: {num1 - num2}"
        elif operation == "multiply":
            result.text = f"Result: {num1 * num2}"
        elif operation == "divide":
            if num2 == 0:
                result.text = "Error: Cannot divide by zero"
            else:
                result.text = f"Result: {num1 / num2}"
        elif operation == "remainder":
            if num2 == 0:
                result.text = "Error: Cannot divide by zero"
            else:
                result.text = f"Result: {num1 % num2}"
    except ValueError:
        document["calcResult"].text = "Please enter valid numbers"

# Bind function to the button click
document["calculateButton"].bind("click", lambda evt: calculate())`,
      challenge: "Create a calculator that performs basic math operations including finding the remainder when dividing two numbers."
    },
    3: {
      title: "Password Strength Checker",
      description: "Build a tool that evaluates password strength based on multiple criteria.",
      initialCode: "",
      solution: `from browser import document
import re

def check_password_strength():
    password = document["password"].value
    result = document["passwordResult"]
    
    # Initial score
    score = 0
    feedback = []
    
    # Length check
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("Password should be at least 8 characters long")
    
    # Check for uppercase letters
    if re.search(r'[A-Z]', password):
        score += 1
    else:
        feedback.append("Add uppercase letters")
    
    # Check for lowercase letters
    if re.search(r'[a-z]', password):
        score += 1
    else:
        feedback.append("Add lowercase letters")
    
    # Check for digits
    if re.search(r'\\d', password):
        score += 1
    else:
        feedback.append("Add numbers")
    
    # Check for special characters
    if re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        score += 1
    else:
        feedback.append("Add special characters")
    
    # Check for common words
    common_words = ["password", "123456", "qwerty", "admin", "welcome", "login"]
    for word in common_words:
        if word in password.lower():
            score = max(0, score - 1)
            feedback.append(f"Avoid common word: {word}")
            break
    
    # Display result
    if score == 0:
        result.text = "Very Weak: " + ", ".join(feedback)
    elif score <= 2:
        result.text = "Weak: " + ", ".join(feedback)
    elif score <= 4:
        result.text = "Moderate: " + ", ".join(feedback)
    else:
        result.text = "Strong Password!"

# Bind function to input events
document["password"].bind("input", lambda evt: check_password_strength())`,
      challenge: "Create a password strength checker that evaluates passwords based on length, character types, and checks for common words that should be avoided."
    }
  };

  // Reset code value when level changes
  useEffect(() => {
    setCodeValue("");
    setErrorMessage("");
    setShowAnswer(false);
  }, [currentLevel]);

  // Load Brython
  useEffect(() => {
    const brythonScript = document.createElement("script");
    brythonScript.src = "https://cdnjs.cloudflare.com/ajax/libs/brython/3.10.5/brython.min.js";
    
    const brythonStdLib = document.createElement("script");
    brythonStdLib.src = "https://cdnjs.cloudflare.com/ajax/libs/brython/3.10.5/brython_stdlib.js";
    
    brythonScript.onload = () => {
      document.body.appendChild(brythonStdLib);
      brythonStdLib.onload = () => {
        window.brython();
        setGameLoaded(true);
      };
    };
    
    document.body.appendChild(brythonScript);
    
    return () => {
      if (document.body.contains(brythonScript)) {
        document.body.removeChild(brythonScript);
      }
      if (document.body.contains(brythonStdLib)) {
        document.body.removeChild(brythonStdLib);
      }
    };
  }, []);

  // Render the appropriate UI for the current level
  const renderGameUI = () => {
    if (currentLevel === 1) {
      return (
        <div className="game-interface" style={{ marginBottom: "20px" }}>
          <input type="text" id="userInput" placeholder="Enter a number" />
          <button id="checkButton" className="game-button">Guess</button>
          <p id="gameResult"></p>
        </div>
      );
    } else if (currentLevel === 2) {
      return (
        <div className="game-interface" style={{ marginBottom: "20px" }}>
          <input type="number" id="num1" placeholder="First number" />
          <select id="operation">
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">×</option>
            <option value="divide">÷</option>
            <option value="remainder">%</option>
          </select>
          <input type="number" id="num2" placeholder="Second number" />
          <button id="calculateButton" className="game-button">Calculate</button>
          <p id="calcResult"></p>
        </div>
      );
    } else if (currentLevel === 3) {
      return (
        <div className="game-interface" style={{ marginBottom: "20px" }}>
          <input type="password" id="password" placeholder="Enter a password" style={{ width: "300px" }} />
          <p id="passwordResult"></p>
        </div>
      );
    }
  };

  // Function to validate code before running
  const validateAndRunCode = () => {
    setErrorMessage("");
    
    // Check if code is empty
    if (!codeValue.trim()) {
      setErrorMessage("Please write some code before running.");
      return;
    }
    
    // Check if it contains Python syntax (simple check)
    if (!codeValue.includes("def") && !codeValue.includes("import") && !codeValue.includes("from")) {
      setErrorMessage("Your code doesn't appear to be valid Python. Please check your syntax.");
      return;
    }
    
    // Check if the code contains necessary elements for each level
    if (currentLevel === 1 && !codeValue.includes("check_guess")) {
      setErrorMessage("Your code should include a check_guess function for the guessing game.");
      return;
    }
    
    if (currentLevel === 2 && !codeValue.includes("calculate")) {
      setErrorMessage("Your code should include a calculate function for the calculator.");
      return;
    }
    
    if (currentLevel === 3 && !codeValue.includes("check_password_strength")) {
      setErrorMessage("Your code should include a check_password_strength function.");
      return;
    }
    
    // If all validation passes, run the code
    try {
      // Clear previous script
      const oldScript = document.getElementById("pythonScript");
      if (oldScript) {
        oldScript.remove();
      }
      
      // Create new script with current editor content
      const script = document.createElement("script");
      script.id = "pythonScript";
      script.type = "text/python";
      script.text = codeValue;
      document.body.appendChild(script);
      
      // Run Brython again to execute the new code
      window.brython();
    } catch (e) {
      console.error("Error running code:", e);
      setErrorMessage("Error running code: " + e.message);
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#222", color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#f39c12" }}>Python Programming Game</h1>
        <Link to="/" style={{ fontSize: "16px", textDecoration: "none", color: "#f39c12", padding: "8px 15px", border: "1px solid #f39c12", borderRadius: "4px" }}>
          ← Back to Home
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {Object.keys(levelData).map((levelNum) => (
          <button 
            key={levelNum}
            onClick={() => setCurrentLevel(parseInt(levelNum))}
            style={{
              margin: "0 10px",
              padding: "8px 15px",
              background: currentLevel === parseInt(levelNum) ? "#f39c12" : "#444",
              color: currentLevel === parseInt(levelNum) ? "white" : "#ddd",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Level {levelNum}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Top row: Game interface */}
        <div style={{ padding: "20px", border: "1px solid #444", borderRadius: "8px", backgroundColor: "#333" }}>
          <h2>{levelData[currentLevel].title}</h2>
          <p>{levelData[currentLevel].description}</p>
          
          {renderGameUI()}
          
          <div style={{ marginTop: "20px", padding: "15px", background: "#444", borderRadius: "8px" }}>
            <h3>Challenge:</h3>
            <p>{levelData[currentLevel].challenge}</p>
          </div>
        </div>
        
        {/* Bottom row: Code editor */}
        <div style={{ padding: "20px", border: "1px solid #444", borderRadius: "8px", backgroundColor: "#333" }}>
          <h2>Code Editor</h2>
          <textarea
            id="codeEditor"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
            placeholder="Write your Python code here..."
            style={{ 
              width: "100%", 
              height: "300px", 
              fontFamily: "monospace", 
              padding: "10px",
              border: "1px solid #555",
              borderRadius: "4px",
              fontSize: "14px",
              backgroundColor: "#1e1e1e",
              color: "#ddd",
              resize: "vertical",    
              maxWidth: "100%",      
              overflow: "auto"       
            }}
          />
          
          {errorMessage && (
            <div style={{ color: "#ff6b6b", marginTop: "10px", padding: "10px", backgroundColor: "#2d2d2d", borderRadius: "4px" }}>
              {errorMessage}
            </div>
          )}
          
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
            <button 
              onClick={validateAndRunCode}
              style={{ 
                padding: "10px 20px", 
                background: "#4CAF50", 
                color: "white", 
                border: "none", 
                borderRadius: "4px", 
                cursor: "pointer"
              }}
            >
              Run Code
            </button>
            
            <button 
              onClick={() => setShowAnswer(!showAnswer)}
              style={{ 
                padding: "10px 20px", 
                background: "#2196F3", 
                color: "white", 
                border: "none", 
                borderRadius: "4px", 
                cursor: "pointer"
              }}
            >
              {showAnswer ? "Hide Answer" : "View Answer"}
            </button>
          </div>
          
          {showAnswer && (
            <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#2d2d2d", borderRadius: "8px", border: "1px solid #555" }}>
              <h3>Solution:</h3>
              <pre style={{ 
                backgroundColor: "#1e1e1e", 
                color: "#f8f8f2", 
                padding: "15px", 
                borderRadius: "4px", 
                overflowX: "auto",
                fontSize: "14px",
                lineHeight: "1.5",
                fontFamily: "monospace"
              }}>
                {levelData[currentLevel].solution}
              </pre>
              <button 
                onClick={() => {
                  setCodeValue(levelData[currentLevel].solution);
                  setShowAnswer(false);
                }}
                style={{ 
                  padding: "8px 15px", 
                  background: "#7e57c2", 
                  color: "white", 
                  border: "none", 
                  borderRadius: "4px", 
                  cursor: "pointer",
                  marginTop: "10px"
                }}
              >
                Apply Solution
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Initial Python Script (will be replaced when Run Code is clicked) */}
      {gameLoaded && (
        <script id="pythonScript" type="text/python">
          # Initial setup - will be replaced when user runs their code
        </script>
      )}
    </div>
  );
};

export default Game;