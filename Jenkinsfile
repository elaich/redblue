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
        docker {image: 'cypress/base:10'}
      }
      steps {
        sh './test.sh'
      }
    }
  }
}
