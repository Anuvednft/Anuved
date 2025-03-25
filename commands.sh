# Initialize git repository
git init

# Check current status
git status

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Set main branch name (use this if you're on 'master' branch)
git branch -M main

# Add the GitHub repository as remote
git remote add origin https://github.com/Anuved/Anuved.git

# Push your code to GitHub (if this fails, try with -f flag)
git push -u origin main

# If you get an error, try forcing the push (use with caution)
# git push -f origin main
