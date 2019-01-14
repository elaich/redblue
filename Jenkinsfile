pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker-compose --version'
        sh 'docker-compose -f docker-compose-ci.yml up -d'
      }
    }

    stage('test') {
      agent {
        docker { image 'node:11-alpine' }
      }
      steps {
        sh './test.sh'
      }
    }
  }
}
