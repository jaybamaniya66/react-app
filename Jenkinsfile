pipeline {
    agent any
    environment {
        FRONTEND_REPO = 'https://github.com/jaybamaniya66/react-app.git'
        FRONTEND_IMAGE = 'your_ecr_repo/frontend'
        AWS_REGION = 'us-west-2'
        ECS_CLUSTER = 'your-cluster-name'
        ECS_SERVICE_FRONTEND = 'frontend-service'
    }
    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Checkout frontend code
                    dir('frontend') {
                        git url: FRONTEND_REPO, branch: 'main'
                    }

                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    // Build Docker image for frontend
                    docker.build("${FRONTEND_IMAGE}:latest", 'frontend')
                }
            }
        }

        stage('Push Docker Images to AWS ECR') {
            steps {
                script {
                    // Login to AWS ECR
                    sh 'aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com'
                    sh 'echo "successfully login in the registry"'
                    // Tag and push frontend image
                    sh "docker tag ${FRONTEND_IMAGE}:latest ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${FRONTEND_IMAGE}:latest"
                    sh "docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${FRONTEND_IMAGE}:latest"

                }
            }
        }

        // stage('Deploy to ECS - Frontend') {
        //     steps {
        //         script {
        //             // Update ECS service for frontend
        //             sh """
        //             aws ecs update-service --cluster ${ECS_CLUSTER} --service ${ECS_SERVICE_FRONTEND} --force-new-deployment --image ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${FRONTEND_IMAGE}:latest
        //             """
        //         }
        //     }
        // }

    }

    post {
        always {
            cleanWs()
        }
    }
}
