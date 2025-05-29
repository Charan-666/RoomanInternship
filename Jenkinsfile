pipeline {
    agent any

    stages {
        stage('Get Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Charan-666/RoomanInternship.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'No build step needed for Node.js'
            }
        }

        stage('Run App') {
            steps {
                sh '''
                pkill node || true
                nohup npm start &
                '''
            }
        }
    }
}
