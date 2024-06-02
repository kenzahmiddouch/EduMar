pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-docker-image-name'
        FIREBASE_TOKEN = credentials('firebase-token') // Assumes you stored Firebase token in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    dockerImage.inside {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
        stage('Deploy to Firebase') {
            steps {
                script {
                    dockerImage.inside {
                        sh 'npm install -g firebase-tools'
                        sh 'firebase deploy --token $FIREBASE_TOKEN'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'The pipeline has been successfully completed.'
        }
        failure {
            echo 'The pipeline has failed.'
        }
    }
}
