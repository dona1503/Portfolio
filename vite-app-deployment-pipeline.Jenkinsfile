pipeline {
  agent any

  environment {
    EC2_HOST = 'ubuntu@44.197.219.253'
    SSH_KEY_ID = 'ec2-ssh-key'
    IMAGE_NAME = 'vite-app'
    CONTAINER_NAME = 'vite-app-container'
  }

  stages {
    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/dona1503/Portfolio'
      }
    }

    stage('Install & Build Vite App') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh "docker build -t ${env.IMAGE_NAME} ."
      }
    }
    
    stage('Push to Docker Hub') {
  steps {
    script {
      docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
        sh "docker tag ${env.IMAGE_NAME} donadutta2003/${env.IMAGE_NAME}:latest"
        sh "docker push donadutta2003/${env.IMAGE_NAME}:latest"
      }
    }
  }
}


    stage('Deploy to EC2') {
      steps {
        sshagent (credentials: ["${env.SSH_KEY_ID}"]) {
          sh """
            echo "[Jenkins] Sending Docker image to EC2..."
            docker save ${env.IMAGE_NAME} | bzip2 | ssh -o StrictHostKeyChecking=no ${env.EC2_HOST} 'bunzip2 | docker load'

            echo "[Jenkins] Restarting container on EC2..."
            ssh -o StrictHostKeyChecking=no ${env.EC2_HOST} '
              docker stop ${env.CONTAINER_NAME} || true &&
              docker rm ${env.CONTAINER_NAME} || true &&
              docker run -d -p 80:80 --name ${env.CONTAINER_NAME} ${env.IMAGE_NAME}
            '
          """
        }
      }
    }
  }
}