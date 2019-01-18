pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker-compose --version'
        sh 'docker-compose build'
        sh 'docker-compose up -d'
      }
    }

    stage('test') {
      agent {
        docker { 
          image 'cypress/base:10' 
          args '--network=red-blue_voting'
      }
      steps {
        sh './test.sh'
      }
    }
  }
}
