pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }

    stage('test') {
      agent {
        docker { 
          image 'cypress/base:10' 
          args '--network=redblue_master_voting'
        }
      }
      steps {
        sh './test.sh'
      }
    }

    stage('deploy') {
      steps {
        sh 'cat deploy.sh | ssh maro@178.62.118.195'
      }
    }
  }
}
