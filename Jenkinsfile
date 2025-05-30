pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/Charan-666/RoomanInternship.git'
        BRANCH = 'main'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Cloning repository from ${REPO_URL}"
                git branch: "${BRANCH}", url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Skipping build: No build for Node.js app here'
            }
        }

        stage('Run Application') {
            steps {
                echo 'Killing any existing Node.js process and starting the app...'
                bat '''
                    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /PID %%a /F
                    start /B cmd /c npm start > app.log 2>&1
                '''
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
    }
}
